var historyList = document.getElementById("historyList");

withdrawalTextBox.addEventListener("moneyWithdrew", function() {
    var value = event.target.value;
    var textNode = document.createTextNode(`Withdrew: ${value}`);
    var listElement = document.createElement("li")

    listElement.appendChild(textNode);

    historyList.appendChild(listElement);
});

depositTextBox.addEventListener("moneyDeposited", function() {
    var value = event.target.value;
    var textNode = document.createTextNode(`Deposited: ${value}`);
    var listElement = document.createElement("li")

    listElement.appendChild(textNode);
    
    historyList.appendChild(listElement);
});