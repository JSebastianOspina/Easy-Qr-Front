import React, {useEffect, useState} from "react";
import axios from "axios";
import './styles.css'
import {user} from "../../../core/auth";
import NoContentPage from "../noContent/noContent";
import Table from "../../components/Table";
import NavBar from "../../components/NavBar";
import {Code} from "../../../core/models/Code";
import {codesRepositoryProvider} from "../../../core/codes-repository-provider";

interface componentProps {
}

const IndexPage: React.FC<componentProps> = () => {

    const [codes, setCodes] = useState<Code[] | []>([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const codesRepository = codesRepositoryProvider()
        const userCodes = await codesRepository.getAll()
        setCodes(userCodes)
    }

    const handleSearch = async (searchResults: Code[] | []) => {
        setCodes(searchResults)
    }

    const hasData = () => {
        return codes.length > 0
    }


    if (hasData()) {
        return (
            <div>
                <NavBar onSearch={handleSearch}/>
                <Table initialCodes={codes}/>
            </div>
        )

    } else {
        return <NoContentPage/>
    }
}
export default IndexPage

