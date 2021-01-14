import React from "react";
// components
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// data
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
