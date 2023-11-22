import React from "react";
import './styles.css';
import QRCode from "react-qr-code";
import {useLocation} from "react-router-dom";


const ShowQR: React.FC = () => {

    const {state} = useLocation()
    const [url, setUrl] = React.useState<string>(state.codeUrl)

    return (
        <div className='QR-container'>
            <div>
            <QRCode
                size={256}
                style={{ height: "500px", maxWidth: "100%", width: "500px"}}
                value={url}
                viewBox={`0 0 256 256`}
            />
            </div>
        </div>
    )
}

export default ShowQR