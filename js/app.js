// Get Income, food, Rent, Clothes Input Value
function getMoneyInput(inputId) {
    const elementID = document.getElementById(inputId);
    const elementValue = elementID.value;
    const parseElementValue = parseFloat(elementValue);
    return parseElementValue;
}



// target calculate button
document.getElementById("calculate").addEventListener("click", function () {
    const income = getMoneyInput("income");
    const food = getMoneyInput("food");
    const rent = getMoneyInput("rent");
    const clothes = getMoneyInput("clothes");
    // calculate balance
    const balance = income - (food + rent + clothes);
    // calculate total expense
    const totalExpense = food + rent + clothes;
    // target balance and total expense heading

    if (income > 0) {
        if (income > totalExpense) {
            if (food >= 0 || typeof food != "number") {
                document.getElementById("balance").innerText = balance;
                document.getElementById("total-expense").innerText = totalExpense;
                document.getElementById("warning").innerText = "";
                document.getElementById("valid-income").innerText = "";
            } else {
                document.getElementById("valid-amount").innerText = "Input Right amount";
                document.getElementById("warning").innerText = "";
                document.getElementById("balance").innerText = "";
                document.getElementById("warning").innerText = "";
            }
        } else {
            document.getElementById("warning").innerText = "You can't spend more than what you earn";
            document.getElementById("balance").innerText = "";
            document.getElementById("total-expense").innerText = "";
            document.getElementById("valid-income").innerText = "";
        }
    } else {
        document.getElementById("warning").innerText = "";
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("valid-income").innerText = "Input Right amount";
    }



})




