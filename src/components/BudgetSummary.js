import React, { useState } from "react";

const BudgetSummary = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const getNetIncome = () => {
    return income - expenses;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Budget Summary</h2>
      <p className="flex justify-between items-center mb-4">
        <span className="font-bold mr-4">Income:</span>
        <input
          className="border rounded-lg p-2 w-1/2"
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
      </p>
      <p className="flex justify-between items-center mb-4">
        <span className="font-bold mr-4">Expenses:</span>
        <input
          className="border rounded-lg p-2 w-1/2"
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(Number(e.target.value))}
        />
      </p>
      <hr className="my-4" />
      <p className="flex justify-between items-center">
        <span className="font-bold mr-4">Net Income:</span>
        <span
          className={`${
            getNetIncome() >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {getNetIncome().toLocaleString("en-US", {
            style: "currency",
            currency: "PHP",
          })}
        </span>
      </p>
    </div>
  );
};

export default BudgetSummary;
