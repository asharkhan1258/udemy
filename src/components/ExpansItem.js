import React from 'react'
import './ExpansItem.css'
import ExpanseDate from './ExpanseDate';

function ExpensItem(props) {
    return (
        <div className='expense-item'>
            <ExpanseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpensItem;


