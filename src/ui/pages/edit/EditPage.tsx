import React, {useEffect, useState} from "react";
import './styles.css';
import Logo from "../../components/Logo";
import FormQuestion from "../../components/FormQuestion";
import Button from "../../components/Button";
import {CodesRepository} from "../../../core/codes-repository";
import {useLocation, useNavigate} from "react-router-dom";
import {Code} from "../../../core/models/Code";

interface componentProps {
}

const EditPage: React.FC<componentProps> = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const code: Code | null = state?.code ? new Code(state.code.id, state.code.description, state.code.url) : null;

    const [formData, setFormData] = useState({
        description: code?.description || '',
        url: code?.url || '',
    });


    const handleOnClick = () => {
        const codeRepository = new CodesRepository()
        if (code) {
            updateCode(codeRepository)
        } else {
            createCode(codeRepository)
        }
    }
    const createCode = async (codeRepository: CodesRepository) => {
        const wasCreated = await codeRepository.create(formData.description, formData.url)
        if (!wasCreated) {
            alert('No se pudo crear el QR')
            return
        }
        navigate('/index')
    }
    const updateCode = async (codeRepository: CodesRepository) => {
        const wasUpdate = await codeRepository.update(code?.id as number, formData.description, formData.url)
        if (!wasUpdate) {
            alert('No se pudo editar el QR')
            return
        }
        navigate('/index')
    }

    return (
        <div className='edit-page-container'>
            <Logo size={193} animate={false}/>
            <FormQuestion
                label={'Descripción del QR'}
                placeholder={'Dale una descripción descriptiva a tu QR'}
                onChange={(value) => setFormData({...formData, description: value})}
                initialValue={formData.description}
            />
            <FormQuestion
                label={'URL'}
                placeholder={'Link de la página que deseas'}
                onChange={(value) => setFormData({...formData, url: value})}
                initialValue={formData.url}
            />
            <Button text={code ? 'Actualizar QR' : 'Crear QR'} onClick={handleOnClick}></Button>
        </div>
    )
}
export default EditPage