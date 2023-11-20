import React from "react";
import './table-styles.css';


const Table: React.FC = () => {
    return (
        <div>
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
            <tr>
                <td>$820,180</td>
                <td>$820,180</td>
                <td>$841,640</td>
            </tr>
            <tr>
                <td>$820,180</td>
                <td>$850,730</td>
                <td>$892,580</td>
            </tr>
            </tbody>
        </table>
</div>
)
}

export default Table