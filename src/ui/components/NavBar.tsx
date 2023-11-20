import React, {useState} from "react";
import './nav-bar-styles.css';
import TextInput from "./TextInput";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import {CodesRepository} from "../../core/codes-repository";


const NavBar: React.FC = () => {
    const [search, setSearch] = useState<string>('')

    const handleSearch = async () => {
        const codeRepository = new CodesRepository()
        const searchResult = await codeRepository.search(search)
        const allCodes = await codeRepository.getAll()
        console.log(searchResult)
    }

    return (
        <div className="navList">
            <Logo size={40}/>
            <div className="search">
                <TextInput placeholder={'Buscar por descripción'} onChange={setSearch} width={'100%'}/>
                <SearchIcon onClick={handleSearch}/>
            </div>
        </div>
    )

}

export default NavBar