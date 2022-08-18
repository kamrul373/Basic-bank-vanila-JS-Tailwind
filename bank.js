// deposit calculations : 

// adding event listner

document.getElementById("btn-deposit").addEventListener("click", function (event) {
    // getting new depsit amount
    const newDepositContainer = getElementById("deposit-amount");
    const newDepositAmount = getInputValue("deposit-amount");

    // getting current balance amount
    const currentBalanceContainer = getElementById("current-balance");
    const currentBalanceAmount = getElementInnerTextById("current-balance");

    if (newDepositAmount == 0) {
        return alert("You cant deposit empty");
    }
    // getting current deposit amount 
    const currentDepositContainer = getElementById("current-deposit");
    const currentDepositAmount = getElementInnerTextById("current-deposit");

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
    // getting new withdraw amount 
    const newWithdrawContainer = getElementById("withdraw-amount");
    const newWithdrawAmount = getInputValue("withdraw-amount");

    // getting current balance amount
    const currentBalanceContainer = document.getElementById("current-balance");
    const currentBalanceAmount = getElementInnerTextById("current-balance");

    if (newWithdrawAmount == 0) {
        return alert("You cant withdraw 0 $");
    }
    if (currentBalanceAmount == 0 || newWithdrawAmount > currentBalanceAmount) {
        return alert("Your blance is insufficient ! Please deposit ");
    }
    // getting current withraw 
    const withdrawContainer = document.getElementById("current-withraw");
    const currentWithdrawAmount = getElementInnerTextById("current-withraw");

    // withdraw calculation 

    let withdrawTotal = currentWithdrawAmount + newWithdrawAmount;
    withdrawContainer.innerText = withdrawTotal;

    // current balance calculation 

    let totalCurrentBalance = currentBalanceAmount - newWithdrawAmount;
    currentBalanceContainer.innerText = totalCurrentBalance;

    // reset 
    newWithdrawContainer.value = "";

});