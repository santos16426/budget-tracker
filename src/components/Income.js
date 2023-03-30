import React from "react";

const IncomeList = ({ incomes }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Income List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income, index) => (
            <tr key={income.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{income.description}</td>
              <td className="border px-4 py-2">{income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeList;
