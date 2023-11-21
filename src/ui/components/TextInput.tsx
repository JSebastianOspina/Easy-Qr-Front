import React, {useEffect, useState} from "react";
import './text-input-styles.css';

interface componentProps {
    placeholder: string;
    onChange: (value: string) => void;
    initialValue?: string;
    width?: string;
}

const TextInput: React.FC<componentProps> = ({placeholder, initialValue, onChange, width = '100%'}) => {
    const [value, setValue] = useState<string>(initialValue || '')


    const handleOnChange = (newValue:string) =>{
        setValue(newValue)
        onChange(newValue)
    }
    return (
        <input type="text" value={value} className='text-input' style={{width: width}} placeholder={placeholder}
               onChange={(e) => handleOnChange(e.target.value)}/>
    )
}

export default TextInput