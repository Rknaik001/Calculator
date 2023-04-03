function showNum1() {

    if (document.querySelector("#num2").value =='') {
        alert("enter value")
    } else {
        var val2 = document.querySelector("#num2").value;
        var val1 = document.querySelector("#num1").value;
        document.querySelector('#results').innerHTML = (Math.floor(val1) * Math.floor(val2));
    }
}

function showNum2() {
if (document.querySelector("#num2").value == ''){
    alert("enter value")
} else {
    var val2 = document.querySelector("#num2").value;
    var val1 = document.querySelector("#num1").value;
    document.querySelector('#results').innerHTML = (Math.floor(val1) + Math.floor(val2));
}
}

function showNum3() {
    if (document.querySelector("#num2").value == ''){
        alert("enter value")
    } else {
    var val2 = document.querySelector("#num2").value;
    var val1 = document.querySelector("#num1").value;
    document.querySelector('#results').innerHTML = (Math.floor(val1) / Math.floor(val2));
}
}

function showNum4() {
    if (document.querySelector("#num2").value == '') {
        alert("enter value")
    } else {     
    var val2 = document.querySelector("#num2").value;
    var val1 = document.querySelector("#num1").value;
    document.querySelector('#results').innerHTML = (Math.floor(val1) - Math.floor(val2));
}
}

function ClickIt() {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = '';
    document.querySelector("#results").innerHTML = 'Values';
}
