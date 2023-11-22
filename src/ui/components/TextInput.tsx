import React, {useEffect, useState} from "react";
import './text-input-styles.css';
import useInput from "../../hooks/useInput";

interface componentProps {
    placeholder: string;
    onChange: (value: string) => void;
    initialValue?: string;
    width?: string;
}

const TextInput: React.FC<componentProps> = ({placeholder, initialValue, onChange, width = '100%'}) => {
    const {inputState,handleOnChange} = useInput(initialValue, onChange) // <= Custom Hook
    return (
        <input type="text" value={inputState} className='text-input' style={{width: width}} placeholder={placeholder}
               onChange={(e) => handleOnChange(e.target.value)}/>
    )
}

export default TextInput