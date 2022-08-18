// deposit calculations : 

// adding event listner

document.getElementById("btn-deposit").addEventListener("click", function (event) {
    // getting current deposit amount 
    const currentDepositContainer = document.getElementById("current-deposit");
    let currentDepositAmount = currentDepositContainer.innerText;
    currentDepositAmount = parseFloat(currentDepositAmount);

    // getting current balance amount
    const currentBalanceContainer = document.getElementById("current-balance");
    let currentBalanceAmount = currentBalanceContainer.innerText;
    currentBalanceAmount = parseFloat(currentBalanceAmount);

    // getting new depsit amount
    const newDepositContainer = document.getElementById("deposit-amount");
    let newDepositAmount = newDepositContainer.value;
    newDepositAmount = parseFloat(newDepositAmount);

    // calculation of deposit
    let depositTotal = currentDepositAmount + newDepositAmount;
    currentDepositContainer.innerText = depositTotal;

    // calculation of total current balance after deposit

    let balnceTotal = newDepositAmount + currentBalanceAmount;
    currentBalanceContainer.innerText = balnceTotal;

    // reset
    newDepositContainer.value = "";

});

document.getElementById("btn-withdraw").addEventListener("click", function (event) {
    // getting current withraw 
    const withdrawContainer = document.getElementById("current-withraw");
    let currentWithdrawAmount = withdrawContainer.innerText;
    currentWithdrawAmount = parseFloat(currentWithdrawAmount);

    // getting current balance amount
    const currentBalanceContainer = document.getElementById("current-balance");
    let currentBalanceAmount = currentBalanceContainer.innerText;
    currentBalanceAmount = parseFloat(currentBalanceAmount);

    // getting new withdraw amount 
    const newWithdrawContainer = document.getElementById("withdraw-amount");
    let newWithdrawAmount = newWithdrawContainer.value;
    newWithdrawAmount = parseFloat(newWithdrawAmount);

    // withdraw calculation 

    let withdrawTotal = currentWithdrawAmount + newWithdrawAmount;
    withdrawContainer.innerText = withdrawTotal;

    // current balance calculation 

    let totalCurrentBalance = currentBalanceAmount - newWithdrawAmount;
    currentBalanceContainer.innerText = totalCurrentBalance;

    // reset 
    newWithdrawContainer.value = "";

});