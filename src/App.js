import React,{useState} from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/addexpenseform';

function Start(){
  const [expense ,setexpense]=useState([])
  const addexpensehandle =(newexpense) =>{
    setexpense((prevexpenses) => [...prevexpenses, newexpense])
  };
  return (
    <div>
      <Header />
      <AddExpenseForm onaddexpense={addexpensehandle} />
       <h3>Expense List</h3>
      <ul>
        {expense.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
     
      </div>
  );
  }
  export default Start;
