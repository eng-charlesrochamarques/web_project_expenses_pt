let budgetValue;
let totalExpensesValue;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceV;
function addExpenseEntry(entries) {
  let sumEntries = 0;
  for (let i = 0; i < entries.length; i++) {
    sumEntries = entries[i][1] + sumEntries;
  }
  return sumEntries;
}
totalExpensesValue = addExpenseEntry(expenseEntries);

function calculateAverageExpense() {
  let sumEntries = addExpenseEntry(expenseEntries);
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
  let sumEntries = addExpenseEntry(expenseEntries);
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
  console.log("Cor:", balanceColor);
  return balanceColor;
}
/*
for (let i = 0; i < expenseEntries.length; i++) {
  console.log("Soma:", sumEntries);
  console.log("Entrada:", expenseEntries[i][1]);
  console.log("i:", i);
  console.log("Numero:", expenseEntries.length);
  sumEntries = expenseEntries[i][1] + sumEntries;
}
*/
/*
function addExpenseEntry(entries) {
  debugger;
  let sumEntries = 0;
  for (let i = 0; i < entries.length; i++) {
    console.log("Soma:", sumEntries);
    sumEntries = entries[i][1] + sumEntries;
  }
  return sumEntries;
}
*/

console.log(expenseEntries.length);
