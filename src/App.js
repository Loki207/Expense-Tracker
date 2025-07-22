import React,{useState} from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/addexpenseform';

function Start(){
  const [expense,setexpense]=useState([]);
  const handleaddexpense=(newexpense)=>{
   setexpense([...expense, newexpense]);
  }
  return (
    <div>
      <Header />
      <AddExpenseForm onAddExpense={handleaddexpense}/>
      
     
      </div>
  );
  }
  export default Start;
