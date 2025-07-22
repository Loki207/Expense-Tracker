import React,{useState} from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/addexpenseform';
import ExpenseList from './components/expenselist';
// import Summary from './components/summary';

function Start(){
  const [expense,setexpense]=useState([]);
  const handleaddexpense=(newexpense)=>{
   setexpense([...expense, newexpense]);
  }
    const handleDeleteExpense = (id) => {
    setexpense((epense) => expense.filter((e) => e.id !== id));
  };
  return (
    <div>
      <Header />
      <AddExpenseForm onAddExpense={handleaddexpense}/>
      <h3>Expense List</h3>
      <ExpenseList expense={expense} onDelete={handleDeleteExpense} />
      {/* <Summary expense={expense}/> */}
      
     
      </div>
  );
  }
  export default Start;
