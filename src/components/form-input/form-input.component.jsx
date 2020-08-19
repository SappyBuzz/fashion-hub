import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handelChange,label, ...othersInputProps}) => (
    <div className="group">
        <input className="form-input" onChange={handelChange} {...othersInputProps} />
        {
            label?
            (
            <label className={`${othersInputProps.value.length?'shrink':''} form-input-label `}>{label}</label>
            )
            :
            null
        }

    </div>
)

export default FormInput;