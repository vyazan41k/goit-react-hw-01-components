import React from "react";
import TransactionItem from "./TransactionItem/TransactionItem";

const TransactionHistory = (obj) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {obj.items.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
