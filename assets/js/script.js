const rootElement = document.getElementById("root");
const monthName = new Date().toLocaleString('default', { month: 'long' });
const totalDaysLeft = 30 - new Date().getDate(); 

let income = 0;

let expense = 0;

let currentBalance = 0;

function addIncome() {
    let amount = prompt("Enter amount");
    income += parseInt(amount);
    render();
}

function addExpense() {
    let amount = prompt("Enter amount");
    expense += parseInt(amount);
    render();
}

console.log(income, expense);

function App() {
    currentBalance = income - expense;
    let homepage = `
    <div class="card">
    <div class="container">
        <div class="current">
        <h1>₹ ${currentBalance}</h1>
        <p>balance left in ${monthName}</p>
        </div>
        <div class="left-days">
            <h3>${totalDaysLeft}</h3>
            <p>days left</p>
        </div>
    </div>

    <div class="transactions">
        <h2>Transactions</h2>
        <section class="income">
            <button class="add-income" onclick=addIncome()>+</button>
            <h3>Income</h3>
            <p>₹ ${income}</p>
        </section>
        <section class="expense">
            <button class="add-expense" onclick=addExpense()>+</button>
            <h3>Expense</h3>
            <p>₹ ${expense}</p>
        </section>
    </div>
    </div>
    `

    return homepage
}

currentBalance = income - expense;

function render() {
    rootElement.innerHTML = App();
}

render();