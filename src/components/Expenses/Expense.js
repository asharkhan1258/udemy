import React from 'react'
import './Expense.css'
import ExpensItem from './ExpensItem.js'
import Card from '../UI/card.js'

function Expanse(props) {
  return (
    <Card className='expenses'>
      <ExpensItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpensItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpensItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpensItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
    </Card>
  )
}

export default Expanse;
