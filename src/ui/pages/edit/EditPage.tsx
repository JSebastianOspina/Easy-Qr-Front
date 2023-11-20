import React from "react";
import './styles.css';
import Logo from "../../components/Logo";
import FormQuestion from "../../components/FormQuestion";
import Button from "../../components/Button";

interface componentProps {
    name: string;
}

const EditPage: React.FC<componentProps> = (props: componentProps) => {
    const [description, setDescription] = React.useState<string>('')
    const [url, setUrl] = React.useState<string>('')

    const handleOnClick = () => {
        console.log(description, url)
    }

    return (
        <div className='edit-page-container'>
            <Logo size={193} animate={false}/>
            <FormQuestion label={'Descripción del QR'} placeholder={'Dale una descripción descriptiva a tu QR'}
                          onChange={setDescription}/>
            <FormQuestion label={'URL'} placeholder={'Link de la página que deseas'} onChange={setUrl}/>
            <Button text={'Actuaizar QR'} onClick={handleOnClick}></Button>
        </div>
    )
}
export default EditPage