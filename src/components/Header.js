import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500 py-4 px-8 flex justify-between items-center">
      <h1 className="text-white text-3xl font-bold">Budget Tracker</h1>
      <nav>
        <ul className="flex">
          <li>
            <a href="#" className="text-white hover:text-gray-200 py-2 px-4">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200 py-2 px-4">
              Transactions
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200 py-2 px-4">
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
