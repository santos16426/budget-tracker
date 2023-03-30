import React, { useState } from "react";

const Cashflow = ({ addCashflow }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCashflow = (e) => {
    e.preventDefault();
    addCashflow({ amount, type, description });
    setAmount("");
    setDescription("");
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2">Add Cashflow</h2>
      <form onSubmit={handleAddCashflow} className="flex flex-col gap-4">
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="border-gray-300 rounded-md shadow-sm p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="border-gray-300 rounded-md shadow-sm p-2 w-full"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="border-gray-300 rounded-md shadow-sm p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-md shadow-sm p-2 w-full hover:bg-blue-600"
        >
          Add Cashflow
        </button>
      </form>
    </div>
  );
};

export default Cashflow;
