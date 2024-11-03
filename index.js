const billTotalInput = document.querySelector("#bill-total");
const tipSlider = document.querySelector("#tip");
const tipPercentageDisplay = document.querySelector("#tip-percentage");
const tipAmountDisplay = document.querySelector("#tip-amount");
const totalAmountDisplay = document.querySelector("#total-bill");
const resetButton = document.querySelector("#reset-button");

billTotalInput.addEventListener("input", calculateTip);
tipSlider.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetCalculator);

function calculateTip() {
    let billTotal = parseFloat(billTotalInput.value);
    if (isNaN(billTotal) || billTotal <= 0) {
        billTotalInput.value = "";
        alert("Please enter a valid positive number for the bill total.");
        return;
    }

    let tipPercentage = parseInt(tipSlider.value);
    tipPercentageDisplay.value = `${tipPercentage}%`;

    let tipAmount = (billTotal * tipPercentage) / 100;
    let totalAmount = billTotal + tipAmount;

    tipAmountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.innerText = `$${totalAmount.toFixed(2)}`;
}

function resetCalculator() {
    billTotalInput.value = "";
    tipSlider.value = 1;
    tipPercentageDisplay.value = "0%";
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
}

