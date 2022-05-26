import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Internet Charges",
    amount: 29.67,
    date: new Date(2022, 6, 2),
  },
  {
    id: "2",
    title: "Books",
    amount: 100.67,
    date: new Date(2022, 3, 12),
  },
  {
    id: "3",
    title: "Car Insurance",
    amount: 297.67,
    date: new Date(2022, 5, 22),
  },
  {
    id: "4",
    title: "Food Items",
    amount: 234,
    date: new Date(2022, 7, 10),
  },
];
function App() {
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);


  const addExpenseHandler=expense=>{
    setExpenses((prevExpense)=>{
      return[expense, ...prevExpense]
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get Started!"),
  //   React.createElement(Expenses,{items:expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
