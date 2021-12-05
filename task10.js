const billInput = document.querySelector("#bill-input");
const cashInput = document.querySelector("#cash-input");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfnotes = document.querySelectorAll(".no-of-notes")


const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", function billamount() {
    hideMessage();
    if (billInput.value > 0) {
        if (cashInput.value >= billInput.value) {
            const amountToreturn = cashInput.value - billInput.value;
            calculateChange(amountToreturn);

        } else {
            showMessage("cash should be greater or equal to bill amount");
        }

    } else {
        showMessage("bill amount should greater than 0");
    }

});

function calculateChange(amountToreturn) {
    for (let i = 0; i < availableNotes.length; i++) {

        const numberOfnotes = Math.trunc(
            amountToreturn / availableNotes[i]);
        amountToreturn=amountToreturn % availableNotes[i];

        noOfnotes[i].innerText = numberOfnotes;
    }

}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;

}