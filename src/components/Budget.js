import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}&nbsp;</span>
            <input
                    type='number'
                    id='cost'
                    value = { budget }
                    onChange = { (e) => {
                        dispatch({
                            type: 'SET_BUDGET',
                            payload: e.target.value
                        })
                        } 
                    }
                    step = "10"
                    >
            </input>
        </div>
    );
};
export default Budget;