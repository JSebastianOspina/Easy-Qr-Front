import React from "react";
import './button-styles.css';
import {useNavigate} from "react-router-dom";

interface componentProps {
    text: string;
    redirectTo?: string;
    onClick?: () => void; // optional onClick
}

const Button: React.FC<componentProps> = ({text, redirectTo, onClick}) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        if (redirectTo) {
            navigate(redirectTo as string)
        }
        if (onClick) {
            onClick()
        }
    }
    return <button className='button-component' onClick={handleOnClick}> {text} </button>
}

export default Button;