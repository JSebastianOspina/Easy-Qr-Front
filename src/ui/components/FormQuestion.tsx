import React from "react";
import './form-question-styles.css';
import TextInput from "./TextInput";

interface componentProps {
    label: string;
    placeholder: string;
    initialValue?:string;
    onChange: (value: string) => void;
}

const FormQuestion: React.FC<componentProps> = ({label = 'tengo hambre', placeholder = 'Unibagué', onChange,initialValue}: componentProps) => {

    return(
        <div className='form-question'>
        <p> {label}</p>
        <TextInput placeholder={placeholder} onChange={onChange} initialValue={initialValue}/>
        </div>
    )

}

export default FormQuestion;