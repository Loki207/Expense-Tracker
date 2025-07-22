import React from 'react';

function Expenselist({ expenses }) {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <div>
      <h3>Expense List</h3>
      {expenses.map((item, index) => (
        <div key={index}>
          <p>
            {item.title} - ₹{item.amount} - {item.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Expenselist;


 
