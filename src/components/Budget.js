import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                        type='number'
                        id='cost'
                        step = "10"
                        style={{ marginLeft: '2rem' , size: 10}}
                        >
                        </input>
        </div>
    );
};
export default Budget;