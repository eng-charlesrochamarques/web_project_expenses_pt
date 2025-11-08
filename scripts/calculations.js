let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function totalExpenseEntry(entries) {
  let sumEntries = 0;
  for (let i = 0; i < entries.length; i++) {
    sumEntries = entries[i][1] + sumEntries;
  }
  return sumEntries;
}
totalExpensesValue = totalExpenseEntry(expenseEntries);

function calculateAverageExpense() {
  let sumEntries = totalExpenseEntry(expenseEntries);
  let n = expenseEntries.length;
  let average = 0;
  if (n === 0) {
    average = 0;
  } else {
    average = sumEntries / n;
  }
  return average;
}

function calculateBalance() {
  let sumEntries = totalExpenseEntry(expenseEntries);
  let balance = 0;
  balance = budgetValue - sumEntries;
  return balance;
}
let balanceColor = "green";
function updateBalanceColor() {
  let balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance <= budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }

  return balanceColor;
}
function calculateCategoryExpenses(name) {
  let sumCategory = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === name) {
      sumCategory += expenseEntries[i][1];
    }
  }
  return sumCategory;
}
let categoriesTotals = [];

function calculateLargestCategory() {
  const categoryNames = [
    "groceries",
    "restaurants",
    "subscriptions",
    "transport",
    "home",
  ];

  for (let i = 0; i < categoryNames.length; i++) {
    let sumCategory = calculateCategoryExpenses(categoryNames[i]);

    categoriesTotals[i] = [categoryNames[i], sumCategory];

    categoriesTotals[i][1] = calculateCategoryExpenses(categoryNames[i]);
    console.log("Soma:", categoriesTotals[i][0]);
    console.log("valor", categoriesTotals[i][1]);
  }
  let key = 0;
  let maximum = categoriesTotals[0][1];
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > maximum) {
      maximum = categoriesTotals[i][1];
      key = i;
    }
  }
  return categoriesTotals[key][0];
}
function addExpenseEntry(newInput) {
  expenseEntries.push(newInput);
  totalExpensesValue = totalExpenseEntry(expenseEntries);
}
