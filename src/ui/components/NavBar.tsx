import React, {useState} from "react";
import './nav-bar-styles.css';
import TextInput from "./TextInput";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import {CodesRepository} from "../../core/codes-repository";
import {Code} from "../../core/models/Code";

interface ComponentProps {
    onSearch: (searchResults:Code[] | []) => void
}

const NavBar: React.FC<ComponentProps> = ({onSearch}) => {
    const [search, setSearch] = useState<string>('')

    const handleSearch = async () => {
        const codeRepository = new CodesRepository()
        const searchResults = await codeRepository.search(search)
        onSearch(searchResults)
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