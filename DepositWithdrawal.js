var paragraph = document.getElementById("balance");
var withdrawalTextBox = document.getElementById("withdrawalAmount");
var depositTextBox = document.getElementById("depositAmount");
var balanceValue = 0;

depositTextBox.onkeydown = function(event){
    if(event.keyCode == 13) {
        try {
            validateTextBox(depositTextBox);
            depositMoney();
        }

        catch(e) {
            alert(e);
        }
    }
}

withdrawalTextBox.onkeydown = function(event){
    if(event.keyCode == 13) {
        try {
            validateTextBox(withdrawalTextBox);
            withdrawalMoney();
        }

        catch(e) {
            alert(e);
        }
    }
}

window.onload = function() {
    changeBalance(balanceValue);
}

function changeBalance(balanceValue) {
    paragraph.innerText = balanceValue;
}

function withdrawalMoney() {
    try {
        validateTextBox(withdrawalTextBox);
    
        var withdrawalAmount = parseInt(withdrawalTextBox.value);
        balanceValue -= withdrawalAmount;
        changeBalance(balanceValue);

        var event = new CustomEvent("moneyWithdrew")
        withdrawalTextBox.dispatchEvent(event);

        withdrawalTextBox.value = "";
    }

    catch(e) {
        alert(e);
    }
}

function depositMoney() {
    try {
        validateTextBox(depositTextBox);

        var depositAmount = parseInt(depositTextBox.value);
        balanceValue += depositAmount;
        changeBalance(balanceValue);

        var event = new CustomEvent("moneyDeposited")
        depositTextBox.dispatchEvent(event);
        
        depositTextBox.value = "";
    }

    catch(e) {
        alert(e);
    }
}

function validateTextBox(textBox) {
    if(textBox.value === ""){
        throw "Cannot be empty.";
    }

    else if(isNaN(parseInt(textBox.value))) {
        textBox.value = "";
        throw "Please enter a number.";
    }
}