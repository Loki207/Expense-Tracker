import React, { useState } from 'react';

function AddExpenseForm({onaddexpense}) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date,setdate]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newexpense={
      id:Date.now(),
      title,
      amount,date
    }
    onaddexpense(newexpense);
    setTitle('');
    setAmount('');
    setdate('');
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
     <br/>
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
      placeholder="date" 
      value={date}
      onChange={(e)=>setdate(e.target.value)}
      required />
      <br/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddExpenseForm;


