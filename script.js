var showData = document.getElementById("showData");

function userInput(num) {
    showData.append(num);
}

function reset() {
    showData.innerHTML = "";
}
function backSpace() {
    let newExp = showData.innerHTML.slice(0, -1);
    showData.innerHTML = "";
    showData.append(newExp);
}
function equals() {
    let exp = showData.innerHTML;
    let result = eval(exp);
    showData.innerHTML = "";
    showData.append(result);
}
