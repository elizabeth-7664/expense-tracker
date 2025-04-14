import React from 'react';

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 bg-white rounded shadow-md">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-2 text-left">Expense</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id} className="odd:bg-gray-100">
              <td className="p-2">{exp.name}</td>
              <td className="p-2">{exp.description}</td>
              <td className="p-2">{exp.category}</td>
              <td className="p-2">Ksh {exp.amount}</td>
              <td className="p-2">{exp.date}</td>
              <td className="p-2">
                <button
                  onClick={() => onDelete(exp.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
