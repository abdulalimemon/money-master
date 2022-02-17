// Get Income, food, Rent, Clothes Input Value
function getMoneyInput(inputId) {
    const elementID = document.getElementById(inputId);
    const elementValue = elementID.value;
    const parseElementValue = parseFloat(elementValue);
    return parseElementValue;
}
// target calculate button
document.getElementById("calculate").addEventListener("click", function () {
    // input field
    const income = getMoneyInput("income");
    const food = getMoneyInput("food");
    const rent = getMoneyInput("rent");
    const clothes = getMoneyInput("clothes");
    // calculate balance
    const balance = income - (food + rent + clothes);
    // calculate total expense
    const totalExpense = food + rent + clothes;
    // error handling
    if (income > 0 && food >= 0 && rent >= 0 && clothes >= 0) {
        if (income > totalExpense) {
            // target balance and total expense heading
            document.getElementById("balance").innerText = balance;
            document.getElementById("total-expense").innerText = totalExpense;
            document.getElementById("warning").innerText = "";
            document.getElementById("valid-income").innerText = "";
            document.getElementById("saving-amount").innerText = "";
            document.getElementById("remaining-balance").innerText = "";
        } else {
            document.getElementById("warning").innerText = "You can't spend more than what you earn";
            document.getElementById("balance").innerText = "";
            document.getElementById("total-expense").innerText = "";
            document.getElementById("valid-income").innerText = "";
            document.getElementById("saving-amount").innerText = "";
            document.getElementById("remaining-balance").innerText = "";
        }
    } else {
        document.getElementById("warning").innerText = "";
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-amount").innerText = "";
        document.getElementById("remaining-balance").innerText = "";
        document.getElementById("valid-income").innerText = "Input Right amount";
    }
})
// target save button
document.getElementById("save-btn").addEventListener("click", function () {
   // input field
    const income = getMoneyInput("income");
    const food = getMoneyInput("food");
    const rent = getMoneyInput("rent");
    const clothes = getMoneyInput("clothes");
    const save = getMoneyInput("save-input");
    // calculate balance
    const balance = income - (food + rent + clothes);
    // calculate saving amount
    const savingAmount = (income / 100) * save;
    // calculate remaining Balance
    const remainingBalance = balance - savingAmount;
    // error handling
    if (save <= 100 && save >= 0) {
        if (balance < savingAmount) {
            document.getElementById("valid-amount").innerText = "You cannot save more than your available balance";
            document.getElementById("saving-amount").innerText = "";
            document.getElementById("remaining-balance").innerText = "";
        } else {
            document.getElementById("saving-amount").innerText = savingAmount;
            document.getElementById("remaining-balance").innerText = remainingBalance;
            document.getElementById("valid-amount").innerText = "";
        }
    } else {
        document.getElementById("valid-amount").innerText = "Input valid number. You cannot save more than 100% and less than 0%";
        document.getElementById("saving-amount").innerText = "";
        document.getElementById("remaining-balance").innerText = "";
    }

})

