import React, {useState} from "react";
import './text-input-styles.css';

interface componentProps {
    size?: number;
    onClick: () => void;
}


const SearchIcon: React.FC<componentProps> = ({size = 35, onClick}: componentProps) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };
    return (
        <i className={`bx bx-search-alt ${isHovered ? 'bx-tada' : ''}`} onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut} style={{'color': '#b2e71b', 'fontSize': `${size}px`, 'cursor': 'pointer'}} onClick={onClick}></i>
    )
}

export default SearchIcon