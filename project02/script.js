var isFahrenheit = true;

function convert() {
    var temp;
    temp = parseFloat(document.getElementById("temp").value);

    var conv;

    if (isFahrenheit == true) {
        conv = (temp - 32) * (5/9);
        var result = "The conversion of " + temp + "°F to Celsius is " + conv.toFixed(1) + "°C.";
    }
    else {
        conv = (temp * (9/5)) + 32;
        var result = "The conversion of " + temp + "°C to Fahrenheit is " + conv.toFixed(1) + "°F.";
    }

    document.getElementById("result").innerHTML = result;
}

function switchConversion() {
    isFahrenheit = !isFahrenheit;

    if (isFahrenheit == true) {
        document.getElementById("tempLabel").innerHTML = "Enter the temperature in Fahrenheit:";
        document.getElementById("switch").value = "Switch to Celsius";
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Enter the temperature in Celsius:";
        document.getElementById("switch").value = "Switch to Fahrenheit";
    }

    document.getElementById("result").innerHTML = "";
}