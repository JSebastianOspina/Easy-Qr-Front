import React, {useEffect} from "react";
import './styles.css';
import Logo from "../../components/Logo";
import {useNavigate} from "react-router-dom";
import {isAuth, user} from "../../../core/auth";

interface componentProps {
}

const WelcomePage: React.FC<componentProps> = (props: componentProps) => {
    const navigate = useNavigate()
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isAuth()) {
                // navigate('/no-content')
                navigate('/index')
                return
            }
            navigate('/login')
        }, 3500)

        return () => clearTimeout(timeout)
    }, [])
    return (
        <div className='welcome-page-container'>
            <p>
                Easy QR
            </p>
            <Logo size={193} animate/>
        </div>
    )
}

export default WelcomePage