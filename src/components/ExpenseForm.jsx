import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.category && form.amount && form.date) {
      onAddExpense({ ...form, id: uuidv4() });
      setForm({ name: '', description: '', category: '', amount: '', date: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter expense name"
          className="border p-2 rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter expense description"
          className="border p-2 rounded"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter expense category"
          className="border p-2 rounded"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          className="border p-2 rounded"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="border p-2 rounded"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <button className="bg-black text-white px-6 py-2 mt-4 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;