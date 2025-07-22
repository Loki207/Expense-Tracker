import React, { useState } from 'react';
import Header from'header';
import AddExpenseForm from './AddExpenseForm';
import Expenselist from './Expenselist';
import Summary from './Summary';

function Start() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>

      <Header/>
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <Summary expenses={expenses} />
      <Expenselist expenses={expenses} /> 
    </div>
  );
}

export default Start;

