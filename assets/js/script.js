const rootElement = document.getElementById("root");
const monthName = new Date().toLocaleString('default', { month: 'long' });
const totalDaysLeft = 30 - new Date().getDate(); 

let income = 0.0;

let expense = 0.0;

let currentBalance = 0;

function addIncome() {
    let amount = prompt("Enter amount");
    income += parseFloat(amount);
    render();
}

function addExpense() {
    let amount = prompt("Enter amount");
    expense += parseFloat(amount);
    render();
}

function deleteAmount(type){
    if(type == income){
        income = 0;
    }else{
        expense = 0;
    }
    render();
}

console.log(income, expense);

function App() {
    currentBalance = income - expense;
    let homepage = `
    <div class="card">
    <div class="container">
        <div class="current">
        <h1>₹ ${currentBalance.toFixed(2)}</h1>
        <p>balance left in ${monthName}</p>
        </div>
        <div class="left-days">
            <h2>${totalDaysLeft}</h2>
            <p>days left</p>
        </div>
    </div>

    <div class="transactions">
        <h2>Transactions</h2>
        <section class="income">
        <div class="operation">
            <button class="add-income" onclick=addIncome()>+</button>
            <button class="remove" onclick=deleteAmount(income)></button>
        </div>
            <h3>Income</h3>
            <p>₹ ${income}</p>
        </section>
        <section class="expense">
            <div class="operation">
                <button class="add-expense" onclick=addExpense()>+</button>
                <button class="remove" onclick=deleteAmount(expense)></button>
            </div>
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