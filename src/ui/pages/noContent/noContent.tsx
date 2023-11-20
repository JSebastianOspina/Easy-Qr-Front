import React from "react";
import './styles.css';
import Logo from "../../components/Logo";
import Button from "../../components/Button";

interface componentProps {
}

const NoContentPage: React.FC<componentProps> = (props: componentProps) => {
    return (
        <div className='no-content-page-container'>
            <p>
                Oops, aún no tienes ningún QR, crea el primero ahora!
            </p>
            <Logo size={193} animate ={false}/>
            <Button text={'Crear QR'} redirectTo={'/edit'}/>
        </div>
    )
}

export default NoContentPage