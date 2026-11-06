function separator (record) {
    var accList = record;
    var accArray = accList.split(";");

    for(let x = 0; x<accArray.length; x++)
    {
        if (accArray[x].includes(",")) {
            accArray[x] = '"' + accArray[x] + '"';
        }
    }
    var result = accArray.join(",");
    document.getElementById("result").textContent = result;
    return result;
}