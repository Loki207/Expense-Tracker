import React from 'react';
 function Expenselist(newexpense,ondelete){
    if (newexpense.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <ul style={styles.list}>
      {newexpense.map((expense) => (
        <li key={expense.id} style={styles.item}>
          <div>
            <strong>{expense.title}</strong> - ₹{expense.amount} - {expense.date}
          </div>
          <button onClick={() => ondelete(expense.id)} style={styles.deleteButton}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    background: '#f0f0f0',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer'
  }
};

export default Expenselist;

 
