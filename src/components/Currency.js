import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const optionStyle = {
    backgroundColor: '#4FA940',
    color: 'white'
}

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    return (
        <div>
            <lable>
                Currency
            </lable>
            <select className='form-select' name="currency" id="currency" 
                value = {currency}
                onChange={(e) => {
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: e.target.value
                    })
                }}
                style={optionStyle}>
                <option value="$" name='test'>$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;