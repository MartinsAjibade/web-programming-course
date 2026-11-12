function calculator () {
    let tableRows = document.getElementById("monthlyRows");
    tableRows.innerHTML = "";
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("totalRows").innerHTML = "";
    document.getElementById("summary").textContent = "";

    let startingInput = document.getElementById("startingBal").value;
    let interestInput = document.getElementById("interest").value;
    let paymentInput = document.getElementById("monthlyPayment").value;

    if (startingInput==="" || interestInput==="" || paymentInput==="") {
        document.getElementById("errorMessage").textContent = "Please fill in the required values.";
        return;
    }

    let startingBal = Number(startingInput);
    let interest = Number(interestInput);
    let monthlyPayment = Number(paymentInput);

    if (!Number.isFinite(startingBal) || !Number.isFinite(interest) || !Number.isFinite(monthlyPayment)) {
        document.getElementById("errorMessage").textContent = "Please enter valid numbers in all fields.";
        return;
    }

    if (startingBal <= 0 || interest < 0 || monthlyPayment <= 0) {
        document.getElementById("errorMessage").textContent = 
        "Starting balance and monthly payment must be greater than zero, and interest rate cannot be negative.";
        return;
    }

    let endBal;
    let intCharge = Number((startingBal * (interest/(100*12))).toFixed(2));
    let month = 0;
    let monthlyResults = [];
    let totalInterest = 0;
    let totalPayment = 0;
    if(monthlyPayment > intCharge) {
        do {
            let beginningBal = startingBal;
            intCharge = Number((startingBal * (interest/(100*12))).toFixed(2));
            let actualPayment = Math.min(monthlyPayment, startingBal + intCharge);
            totalInterest += intCharge;
            totalPayment += actualPayment;
            endBal = Math.max(0, Number((startingBal + intCharge - actualPayment).toFixed(2)));
            startingBal = endBal;
            monthlyResults.push([month + 1, beginningBal, intCharge, actualPayment, endBal])
            month++
        } while(endBal > 0);
    } else {
        document.getElementById("errorMessage").textContent = "Your monthly payment must be greater than your monthly interest.";
        return;
    }

    document.querySelector("table").style.display = "table";

    for (let i = 0; i < monthlyResults.length; i++) {
        let row = `<tr>
            <td>${monthlyResults[i][0]}</td>
            <td>${"$" + monthlyResults[i][1].toFixed(2)}</td>
            <td>${"$" + monthlyResults[i][2].toFixed(2)}</td>
            <td>${"$" + monthlyResults[i][3].toFixed(2)}</td>
            <td>${"$" + monthlyResults[i][4].toFixed(2)}</td>
        </tr>`;
        tableRows.innerHTML += row;
    }
    
    let totalRow = `<tr>
        <td>${month}</td>
        <td> </td>
        <td>${"$" + totalInterest.toFixed(2)}</td>
        <td>${"$" + totalPayment.toFixed(2)}</td>
        <td> </td>
        </tr>`;
    let totalRows = document.getElementById("totalRows");
    totalRows.innerHTML = totalRow;

    let summary = document.getElementById("summary");
    summary.innerHTML = `The payoff for $${Number(startingInput).toFixed(2)} at ${Number(interest).toFixed(2)}% 
        paying $${Number(monthlyPayment).toFixed(2)} per month will take ${month} months. 
        The total interest paid will be $${Number(totalInterest).toFixed(2)} with a total amount 
        paid of $${Number(totalPayment).toFixed(2)}.`;
}


function resetCalculator() {
    document.getElementById("startingBal").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("monthlyPayment").value = "";
    document.getElementById("monthlyRows").innerHTML = "";
    document.getElementById("totalRows").innerHTML = "";
    document.querySelector("table").style.display = "none";
    document.getElementById("summary").textContent = "";
    document.getElementById("errorMessage").textContent = "";
}