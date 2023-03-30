import React, { useState } from "react";

const ExpenseList = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseName || !expenseAmount) return;
    setExpenseList([
      ...expenseList,
      { name: expenseName, amount: expenseAmount },
    ]);
    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Add Expense</h2>
      <form onSubmit={handleAddExpense}>
        <div className="flex flex-col mb-4">
          <label htmlFor="expense-name" className="font-bold mb-2">
            Name
          </label>
          <input
            className="border rounded-lg p-2"
            type="text"
            id="expense-name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="expense-amount" className="font-bold mb-2">
            Amount
          </label>
          <input
            className="border rounded-lg p-2"
            type="number"
            id="expense-amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(Number(e.target.value))}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Expense
        </button>
      </form>
      <hr className="my-4" />
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{expense.name}</span>
            <span>
              {expense.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "PHP",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
