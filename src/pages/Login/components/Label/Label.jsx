import React from 'react';
import './Label.css';

const Label = ({text}) =>{
    return(
        <div className='text-container'>
            <label className='text-label'>{text}</label>
        </div>

    );
}
export default Label;