import React, { useState } from "react";
import BudgetSummary from "./components/BudgetSummary";
import Cashflow from "./components/CashFlow";
import ExpenseList from "./components/Expense";
import IncomeList from "./components/Income";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const addCashflow = ({ amount, type, description }) => {
    const cashflow = { id: uuidv4(), amount, type, description };
    if (type === "income") {
      setIncomes([...incomes, cashflow]);
    } else {
      setExpenses([...expenses, cashflow]);
    }
  };

  const getTotalAmount = (cashflows, type) => {
    return cashflows
      .filter((cashflow) => cashflow.type === type)
      .reduce((total, cashflow) => total + parseFloat(cashflow.amount), 0);
  };

  const totalIncome = getTotalAmount(incomes, "income");
  const totalExpenses = getTotalAmount(expenses, "expense");
  const balance = totalIncome - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Budget Tracker</h1>
      <BudgetSummary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />
      <div className="flex flex-col md:flex-row gap-4">
        <Cashflow addCashflow={addCashflow} />
        <div className="flex-1">
          <IncomeList incomes={incomes} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
