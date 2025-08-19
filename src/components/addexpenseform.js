import React, { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id:Date.now(),
      title,
      amount,
      date,
    };

    onAddExpense(newExpense);
    alert(`${title}`)
  
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <input
        type="number"
        placeholder="Amount ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddExpenseForm;


