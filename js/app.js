function getMoneyInput(inputId) {
    const elementID = document.getElementById(inputId);
    const elementValue = elementID.value;
    const parseElementValue = parseFloat(elementValue);
    return parseElementValue;
}




document.getElementById("calculate").addEventListener("click", function () {
    const income = getMoneyInput("income");
    const food = getMoneyInput("food");
    const rent = getMoneyInput("rent");
    const clothes = getMoneyInput("clothes");

    const balance = income - ( food + rent + clothes);

    const totalExpense = food + rent + clothes;

    document.getElementById("balance").innerText = balance;
    document.getElementById("total-expense").innerText = totalExpense;

})




