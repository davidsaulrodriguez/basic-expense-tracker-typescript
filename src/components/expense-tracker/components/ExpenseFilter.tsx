interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Food">Food</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};
export default ExpenseFilter;
