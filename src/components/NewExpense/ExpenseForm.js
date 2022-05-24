import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmoount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // const [userInput, setUserInput]useState({
  //     enteredTitle:"",
  //     enteredAmount:"",
  //     enteredDate:"",
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })

    // setEnterInput((prevState)=>{
    //     return{...prevState, enterTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmoount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
  };

  const submitHnadler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnterTitle('');
    setEnterAmoount('');
    setEnterDate('');
  };

  return (
    <form onSubmit={submitHnadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2009-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
