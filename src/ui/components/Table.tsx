import React, {useEffect, useState} from "react";
import './table-styles.css';
import {Code} from "../../core/models/Code";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import {CodesRepository} from "../../core/codes-repository";

interface componentProps {
    initialCodes: Code[] | [];
}

const Table: React.FC<componentProps> = ({initialCodes}) => {

    const [codes, setCodes] = useState<Code[] | []>(initialCodes)

    useEffect(() => {
        setCodes(initialCodes)
    }, [initialCodes]);

    const navigate = useNavigate()
    const showQr = (codeUrl: string) => {
        navigate('/showQr', {
            state: {
                codeUrl
            }
        })
    }
    const editQr = (code: Code) => {
        console.log(code)
        navigate(`/edit`, {
            state: {
                code
            }
        })
    }
    const deleteQr = async (codeId: number) => {
        const codesRepository = new CodesRepository()
        const wasDeleted = await codesRepository.delete(codeId)
        if (!wasDeleted) {
            alert('No se pudo borrar el QR')
            return
        }
        alert('Borrado exitosamente')

        const newCodes = codes.filter((code) => {
            return code.id !== codeId
        })
        setCodes(newCodes)

        navigate('/index')
    }


    return (
        <div>
            <div className='table-button-container'>
                <Button text={'Crear nuevo QR'} redirectTo={'/edit'}></Button>
            </div>
            <table>
                <caption>Gestionar QR's creados por el usuario</caption>
                <thead>
                <tr>
                    <th>Descripción</th>
                    <th>URL</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {codes.map((code) => {
                    return (
                        <tr>
                            <td>{code.description}</td>
                            <td>{code.url}</td>
                            <td>
                                <div className={'table-actions-column'}>
                                    <i className='bx bx-qr' onClick={() => showQr(code.url)}></i>
                                    <i className='bx bx-edit-alt' onClick={() => editQr(code)}></i>
                                    <i className='bx bxs-trash-alt' onClick={() => deleteQr(code.id)}></i>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Table