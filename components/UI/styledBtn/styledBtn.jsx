import React from 'react';
import s from './styledBtn.module.scss'
const styledBtn = ({children , onClick ,...props}) => {
    return (
        <button onClick={onClick} {...props} className={s.button}>
            {children}
        </button>
    );
};

export default styledBtn;