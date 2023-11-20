import React from "react";
import './styles.css';
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import FormQuestion from "../../components/FormQuestion";
import {logIn} from "../../../core/auth";
import {useNavigate} from "react-router-dom";


interface componentProps {
}

const LoginPage:React.FC<componentProps> = (props: componentProps) => {
    const [name, setName] = React.useState<string>('')
    const navigate = useNavigate()
    const onInputChange = (newValue:string) => {
        setName(newValue)
    }
    const handleOnClick = () => {
        logIn(name)
        navigate('/index')
    }


    return (
        <div className='login-page-container'>
            <Logo/>
            <FormQuestion label={'¿Cuál es tu nombre?'} placeholder={'Mr John Doe'} onChange={onInputChange}/>
            <Button text={'Iniciar sesión'} onClick={handleOnClick}/>
            <button onClick={() => console.log('hola')}>hola</button>
        </div>
    )
}

export default LoginPage