import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm.tsx";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expenses[]>([]);

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
      <h1 className="mb-5">Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-5">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
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
