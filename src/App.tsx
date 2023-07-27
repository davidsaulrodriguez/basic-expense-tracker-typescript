import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 30, category: "Books" },
    { id: 2, description: "bbb", amount: 8, category: "Books" },
    { id: 3, description: "ccc", amount: 22, category: "Books" },
    { id: 4, description: "ddd", amount: 17, category: "Books" },
  ]);

  if (expenses.length === 0) {
    return <p>No expenses</p>;
  }

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};
export default App;
