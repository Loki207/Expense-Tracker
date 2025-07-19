import React from 'react';

function AddExpenseForm() {
  return (
    <div style={tyles.formContainer}>
      <h3>Add Expense</h3>
      <form>
        <input type="text" placeholder="Expense Name" style={tyles.input} />
        <input type="number" placeholder="Amount (₹)" style={tyles.input} />
        <button type="submit" style={tyles.button}>Add</button>
      </form>
    </div>
  );
}

const tyles = {
  formContainer: {
    background: '#f1f1f1',
    padding: '15px',
    borderRadius: '10px',
    width: '300px',
    margin: '20px auto'
  },
  input: {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '90%',
    fontSize: '1rem'
  },
  button: {
    background: '#28a745',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem'
  }
};

export default AddExpenseForm;
