import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter((exp) => exp.id !== id);
    setExpenses(updated);
  };

  const filteredExpenses = expenses
    .filter((exp) =>
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      if (sortBy === 'description') return a.description.localeCompare(b.description);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
      <div className="max-w-4xl mx-auto">
        <ExpenseForm onAddExpense={addExpense} />

        <div className="flex flex-col md:flex-row md:items-center justify-between my-4 gap-2">
          <input
            type="text"
            placeholder="Search expenses"
            className="border border-gray-300 p-2 rounded w-full md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border border-gray-300 p-2 rounded w-full md:w-1/4"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by...</option>
            <option value="category">Category</option>
            <option value="description">Description</option>
          </select>
        </div>

        <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
