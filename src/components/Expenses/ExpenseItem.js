import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 5, 16);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  
  // function clickHandler(){
  //   console.log("clicked by me");
  // };



  // const [title, setTitle]=useState(props.title);
  // //console.log("Expenses item evaluated ");
  // const clickHandler=()=>{
  //  setTitle('Updated!!');
  // // console.log('title');
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
