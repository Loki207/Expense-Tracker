import React from 'react';

function Summary({ expense }) {
  const total = expense.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={styles.summary}>
      <h4>Total Spent: ₹{total.toFixed(2)}</h4>
    </div>
  );
}

const styles = {
  summary: {
    backgroundColor: '#e2e3e5',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px'
  }
};

export default Summary;