import React from "react";
import './index.scss'
export default function Button({ Text, width, padding, onClick, disabled}) {
    return (
        <div className="Button" >
            <button disabled={disabled} onClick={onClick} style={{ width, padding }}>{Text}</button>
        </div>
    );
}
