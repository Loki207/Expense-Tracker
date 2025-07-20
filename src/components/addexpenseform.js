import React, { useState } from 'react';

function AddExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense: ${title}, Amount: ₹${amount}`);
    setTitle('');
    setAmount('');
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
      <button type="submit">Add</button>
    </form>
  );
}

export default AddExpenseForm;


