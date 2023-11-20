import React from "react";
import './text-input-styles.css';

interface componentProps {
    size?: number;
    animate?: boolean;
}


const Logo: React.FC<componentProps> = ({size = 118, animate = false}: componentProps) => {
    const getIconClass = () => {
        const baseClass = 'bx bx-qr-scan'
        if(animate){
            return `${baseClass} bx-flashing`
        }
        return baseClass
    }
    return (
        <i className={getIconClass()}
           style={{'fontSize': `${size}px`, 'color': 'white'}}></i>
    )
}

export default Logo