import React, { useContext } from "react";
import expenseContext from "../context/expense/ExpenseContext";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../helpers/categoryDetailsConst";

const useTransactions = (title) => {
  //we first reset all categories before constructing pie chart
  resetCategories();
  const { transactions } = useContext(expenseContext);
  const transactionsPerType = transactions.filter(
    (transaction) => transaction.type === title
  );
  const total = transactionsPerType.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((transaction) => {
    const specificCategory = categories.find(
      (c) => c.type === transaction.category
    );

    if (specificCategory) {
      specificCategory.amount += transaction.amount;
    }
  });

  const filteredCategories = categories.filter(
    (category) => category.amount > 0
  );

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((category) => category.amount),
        backgroundColor: filteredCategories.map((category) => category.color),
      },
    ],
    labels: filteredCategories.map((category) => category.type),
  };

  return {
    filteredCategories,
    chartData,
    total,
  };
};

export default useTransactions;
