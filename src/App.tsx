import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter.tsx";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 30, category: "Books" },
    { id: 2, description: "bbb", amount: 8, category: "Food" },
    { id: 3, description: "ccc", amount: 22, category: "Utilities" },
    { id: 4, description: "ddd", amount: 17, category: "Entertainment" },
  ]);

  if (expenses.length === 0) {
    return <p>No expenses</p>;
  }

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[] = selectedCategory
    ? expenses.filter(
        (e: {
          id: number;
          description: string;
          amount: number;
          category: string;
        }) => e.category === selectedCategory,
      )
    : expenses;

  return (
    <>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(
            expenses.filter(
              (e: {
                id: number;
                description: string;
                amount: number;
                category: string;
              }) => e.id !== id,
            ),
          )
        }
      />
    </>
  );
};
export default App;
