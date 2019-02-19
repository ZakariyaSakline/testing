var date = new Date();
document.getElementById("show").innerHTML = date;


var date = new Date().getDay();
var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
document.getElementById("day").innerHTML = "Today is " + day[date];

var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();
var time = "";

if (hour < 12) {
    time = "AM";
}
else {
    time = "PM";
}

document.getElementById("time11").innerHTML = hour + " : " + minute + " : " + second + " " + time;



function currpage() {
    window.print();
}
//new
var a = 6;
var b = 7;
var c = 8;
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
document.getElementById("are1").innerHTML = "Total area is :" + area;


/*--solution 4 --*/
function leapyear() {
    var year = document.getElementById('leapYear').value;
    var tempResult = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    var result = tempResult ? "Leap Year" : "Not Leap Year";
    document.getElementById('leapYearResult').innerHTML = result;
}
/*--solution 5 --*/

var year;
for (year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        document.getElementById("checksunday").innerHTML = "1 st january is being sunday :" + year + "<br>";
}
/*--5,8--*/
function multiply() {
    var num1 = document.getElementById("1num").value;
    var num2 = document.getElementById("2num").value;
    document.getElementById("result").innerHTML = num1 * num2;

}

function division() {
    num1 = document.getElementById("1num").value;
    num2 = document.getElementById("2num").value;
    document.getElementById("result").innerHTML = num1 / num2;

}
//-----faren to cel 6
function f2c(f) {
    return (5 / 9) * (f - 32);
}
document.getElementById("ftoc").innerHTML = "Fahrenheit to celcius :" + f2c(250);

// --solution 12--
document.getElementById("url").innerHTML = "Current page url is :" + (document.URL);

//---solution 13
var name = "zakariya";
var n = 104;
this[name] = n;
document.getElementById("variablename").innerHTML = "name variable is :" + this[name];
//--solution 14
var html = "start.php";
var php = "finish.html";
document.getElementById("extention1").innerHTML = html.split(' . ').pop();
document.getElementById("extention2").innerHTML = php.split(' . ').pop();
//solution 15
function difference1(n) {
    var n;
    if (n <= 13) {
        return (13 - n);
    }
    else {
        return (n - 13) * 2;
    }
}
document.getElementById("diff1").innerHTML = difference1(25);
// again
function difference() {
    var n = document.getElementById("numbe").value;
    if (n <= 13) {
        document.getElementById("diff").innerHTML = "when n is less than 13 ,then result is:" + (13 - n);
    }
    else {
        document.getElementById("diff").innerHTML = "when n is greater than 13, then result is: " + (n - 13) * 2;
    }
}
//solution 16
function difference2() {
    var n1 = parseInt(document.getElementById("number1").value);
    var n2 = parseInt(document.getElementById("number2").value);
    var n3 = n1 + n2;
    if (n1 != n2) {

        document.getElementById("sum3").innerHTML = "when numbers  is not equal ,then result is:" + (n3);
    }
    else {
        document.getElementById("sum3").innerHTML = "when number is equal, then result is: " + (n3) * 3;
    }
}

// soluation 17
function difference3() {
    var n = document.getElementById("newnum").value;
    if (n > 19) {
        document.getElementById("newnum1").innerHTML = "when n is greater than 19 ,then result is:" + (n-19)*3;
    }
    else {
        document.getElementById("newnum1").innerHTML = "when n is less or equal than 19, then result is: " + (n - 19);
    }
}