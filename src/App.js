import React,{useState} from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/addexpenseform';
import Expenselist from './components/expenselist';

function Start(){
  const [expense ,setexpense]=useState([])
  const addexpensehandle =(newexpense) =>{
    setexpense((prevexpenses) => [...prevexpenses, newexpense]);
    
     const handleDeleteExpense = (id) => {
    setexpense((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <div>
      <Header />
      <AddExpenseForm onaddexpense={addexpensehandle} />
       <h3>Expense List</h3>
       <Expenselist expense={expense} ondelete={handleDeleteExpense}/>

     
      </div>
  );
  }
}
  export default Start;
