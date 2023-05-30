import React from 'react'
import './ExpensItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './card.js'

function ExpensItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpensItem;


