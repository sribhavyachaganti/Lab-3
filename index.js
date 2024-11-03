const bill_total = document.querySelector("#bill-total");
const slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total_amount = document.querySelector("#total-bill");

bill_total.addEventListener("change", calculateTip);
slider.addEventListener("input", calculateTip);

function calculateTip() {
    if (isNaN(bill_total.value) || parseFloat(bill_total.value) <= 0) {
        alert("ENTER A VALID POSITIVE NUMBER");
        return;
    }

    let tip = parseInt(slider.value);
    tip_percentage.value = tip + "%";

    let bill = parseFloat(bill_total.value).toFixed(2);
    bill_total.value = bill;

    let total_tip = ((tip * bill) / 100).toFixed(2);
    tip_amount.value = total_tip;

    let total_with_tip = (parseFloat(bill) + parseFloat(total_tip)).toFixed(2);
    total_amount.value = total_with_tip;
}
