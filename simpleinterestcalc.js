function computeInterest() {
    var amt = document.getElementById("amount").value;
    var intRate = document.getElementById("interestRateId").value;
    var time = document.getElementById("numOfYears").value;
    var simpleInterest = (amt * intRate * time) / 100;

    if (amt.value == "") {
        alert("Please enter the amount");
        amt.focus();
        return false;
    }
    alert("Amount received after " + time + " year/s at an interest of " + intRate + "% = $" + simpleInterest);
    return true;
}