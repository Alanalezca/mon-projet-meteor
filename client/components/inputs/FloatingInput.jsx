import React from 'react';
import './FloatingInput.module.css';

function FloatingInput ({strLibelleLabel, strID, strTypeInput, value, cbOnChange, cbOnPress}) {

    return (
            <div className="form-floating mb-3">
                <input type={strTypeInput} className="form-control floatingInputDarkmode" id={strID} value={value} onChange={cbOnChange} placeholder="name@example.com"/>
                <label className="floatingLabelDarkMode" htmlFor={strID}>{strLibelleLabel}</label>
            </div>
    )
};

export default FloatingInput;