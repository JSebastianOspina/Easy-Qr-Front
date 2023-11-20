import React from 'react';
import '../normalize.css';
import '../globals.css'
import './App.css';


interface componentProps {
    children?: React.ReactNode
}

const AppLayout: React.FC<componentProps> = ({children}) => {
    return (
        <div className='app-container'>
            {children}
        </div>
    );
}

export default AppLayout;
