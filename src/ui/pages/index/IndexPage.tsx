import React, {useEffect, useState} from "react";
import axios from "axios";
import './styles.css'
import {user} from "../../../core/auth";
import NoContentPage from "../noContent/noContent";
import Table from "../../components/Table";

interface componentProps {
}

const getUser = () =>{
    return user();
}


const IndexPage: React.FC<componentProps> = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(() => {
           //TODO: State
        })
    }, [])

    const getData = async () =>{
        const name = getUser();
        console.log(name);
        //const domain = 'https://99n7cn8s-1337.use2.devtunnels.ms'
        const domain = 'https://7d12-130-250-228-37.ngrok-free.app'
        const url = `${domain}/api/codes?filters[user][$eq]=${name}`
        await axios.get(url).then(res => {
            console.log(res.data.data, 'data from endpoint');
            setData(res.data.data);
            console.log(data, 'data useState');
        })
    }


    if (data.length === 0){
        return <NoContentPage/>
    }

    else {
        return (
        <Table/>
    )}
}
export default IndexPage

