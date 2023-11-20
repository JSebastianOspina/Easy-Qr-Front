import React from "react";
import './text-input-styles.css';

interface componentProps {
    placeholder: string;
    onChange: (value: string) => void;
    width?: string;
}

const TextInput: React.FC<componentProps> = ({placeholder, onChange, width = '100%'}) => {
    return (
        <input type="text" className='text-input' style={{width: width}} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}  />
    )
}

export default TextInput