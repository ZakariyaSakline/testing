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

// solution 17
function difference3() {
    var n = document.getElementById("newnum").value;
    if (n > 19) {
        document.getElementById("newnum1").innerHTML = "when n is greater than 19 ,then result is:" + (n-19)*3;
    }
    else {
        document.getElementById("newnum1").innerHTML = "when n is less or equal than 19, then result is: " + (n - 19);
    }
}

// solution 18
function difference4(){
var num3=parseInt(document.getElementById("number3").value);
var num4=parseInt(document.getElementById("number4").value);
if((num3==50 || num4==50)||(num3 + num4 ==50)){
document.getElementById("sum4").innerHTML="true";
}
else{
    document.getElementById("sum4").innerHTML="false"
}
}
//solution 19
function given_integer(x){
return ((math.abs(100-x)<=20)||(math.abs(400-x)<=20));
}
document.getElementById("integer").innerHTML=given_integer(25);
// solution 20
function check_neg_pos(){
    var n4 = document.getElementById("number5").value;
    var n5 = document.getElementById("number6").value;
    if ((n4 >= 0)&&(n5<=0)) {
        document.getElementById("neg_pos").innerHTML = "when one number is pos and one is neg:";
    }
    else {
        document.getElementById("neg_pos").innerHTML = "when input is not currect";
    }
}
// solution 31
function biggervalue(){
    var value1=document.getElementById("text9").value;
    var value2=document.getElementById("text10").value;
    var value3=document.getElementById("text11").value;
    var max;
    if(value1>value2){
     max= value1;
    }
    else{
       max= value2;
    }
    if(value3>max){
        max=value3;

    }
document.getElementById("result9").innerHTML=max;
}

//solution 32
function nearest100(){
    var a=document.getElementById("text12").value;
    var b=document.getElementById("text13").value;
var a1=Math.abs(100-a);
var b1=Math.abs(100-b);
    if(a1<b1){
        document.getElementById("result10").innerHTML=" First number is nearest to 100";
    }
    else{
        document.getElementById("result10").innerHTML="Second number is nearest to 100";
    }
   
}
//solution 33

function innervalue(){
    var a=document.getElementById("text14").value;
    var b=document.getElementById("text15").value;
var inner;
    if((a>=40 && a<=60 && b>=40 && b<=60)
    ||
    (a>=70 && a<=100 && b>=70 && b<=100)){
        inner="This values are currect ";
    }
    else{
        inner=" This values are not currect";
    }
   document.getElementById("result11").innerHTML=inner;
}

//solution 34

function innerbigger(){
    var a=document.getElementById("text16").value;
    var b=document.getElementById("text17").value;
    if(a>=40 && a<=60 && b>=40 && b<=60){
        var max;
        if(a>b){
            max=a;
        }else{
            max=b;
        }
        document.getElementById("result12").innerHTML=max;    }
    else{
        document.getElementById("result12").innerHTML=" This values are not currect";
    }
   
}
//solution 37
function uppertolower(){
    var str=document.getElementById("text18").value;
    if(str.length <= 3){
document.getElementById("result13").innerHTML=str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    document.getElementById("result13").innerHTML= front_part + back_part;
}
//solution 38

function greating(){
    var num=document.getElementById("text19").value;
    var result;
    if(num>=89 && num<=100){
result="True";
    }
   else{
result="False";
   }
    document.getElementById("result14").innerHTML= result;
}
// solution 39
function sum10(){
    var x=parseInt(document.getElementById("text20").value);
    var y=parseInt(document.getElementById("text21").value);
    var xy=x+y;
    var result;
    if(xy>50 && xy<80){
result="The sum is around 65";
    }else{
        result="Thr sum is around 80";
    }
    document.getElementById("result15").innerHTML=result;
}
//solution 40
function check_from_two(){
    var x=parseInt(document.getElementById("text22").value);
    var y=parseInt(document.getElementById("text23").value);
     var sum=x+y;
     var difference=x-y;
//      var result;
     if((x==8) || (y==8) ||(sum==8)||(difference==8)){
     var result="The input is true";
     }else{
      var   result="The input is False";
     }
document.getElementById("result16").innerHTML=result;
}
//solution 41
function samenumber(){
    var a=parseInt(document.getElementById("text24").value);
    var b=parseInt(document.getElementById("text25").value);
    var c=parseInt(document.getElementById("text26").value);
    var result;
    if((a==b)&&(b==c)){
result="The number is 30";
    }
  else if((a==b)||(b==c)||(a==c)){
result="the number is 20";
    }
    else{
result="the number is 40";
    }
document.getElementById("result17").innerHTML=result;
}
//solution 43
function samelast_digit(){
    var p=parseInt(document.getElementById("text27").value);
    var q=parseInt(document.getElementById("text28").value);
    var r=parseInt(document.getElementById("text29").value);
   var result;
if( (p % 10 === q % 10)|| (p % 10===r % 10)||(q %10 ===r%10)){
result="True";
}else{
    result="false";
}
document.getElementById("result18").innerHTML=result;

}
//solution 44
function  greater_equal(){
    var x=parseInt(document.getElementById("text30").value);
    var y=parseInt(document.getElementById("text31").value);
    var z=parseInt(document.getElementById("text32").value);
   var result;  
if(((x>=20)&&(x<y || x<z))||((y>=20)&&(y<x || y<z))||((z>20)&&(z<x || z<y))
){

    result="condition is true";
   } else{
       result="iuput is false";
   }
   document.getElementById("result19").innerHTML=result;
}
//solution 46

function  is_multiple(){
    var x=parseInt(document.getElementById("text33").value);
    var y=parseInt(document.getElementById("text34").value);
   var result;  
   if((x % 7==0)||(x % 11==0)||(y % 7==0)||(y % 11==0)){
result="True";
   }else{
       result="false";
   }
   document.getElementById("result20").innerHTML=result;
}
//solution 47

function number_range(){
    var x=document.getElementById("text35").value;
    var y=document.getElementById("text36").value;
    var n=document.getElementById("text37").value;
   var result;  
   if((x<40)||(x>400)||(y<40) ||(y>400)){
result="False";
   }
   else if((n>x)&&(y>n)){
result="True";
   }else{
       result="undefine";
   }
   document.getElementById("result22").innerHTML=result;
}

//solution 48
function myname(){
var name=["wschool","minhaj","rana","shamim","apple"];
var rename=name.reverse();
document.getElementById("result23").innerHTML="After reverce:"+rename;
}
//solution 49
function strreplace(){
var mystr="zakariya";
var newstr=mystr.replace(/a/g,"m");
document.getElementById("result24").innerHTML=newstr;
}

//solution 50
function ucfirst(){
   var mystr="hellow world";
var result=mystr.charAt(0).toUpperCase()+ mystr.slice(1);
document.getElementById("result25").innerHTML=result;
}
// solution 51
function minite_hour(){
    var a=document.getElementById("text38").value;
    var hour=Math.floor(a/60);
    var minite=a % 60;
    result=hour+" : "+minite;
    document.getElementById("result26").innerHTML=result;
 
}

// solution 151
function grade(){
   var x=document.getElementById("text151").value;
  var n=(x*100)/300;
  var result;
if(n>=80){
result="The gread is : A+";
}
else if((n<80)&&(n>75)){
result="The gread is : A";
}
else if((n<75)&&(n>=70)){
    result="The gread is : A-";
    }
 else if((n<70)&&(n>=65)){
        result="The gread is : B+";
        }
 else if((n<65)&&(n>=60)){
  result="The gread is : B";
     }  
 else if((n<60)&&(n>=55)){
        result="The gread is : B-";
        }    
 else if((n<55)&&(n>=50)){
            result="The gread is : C";
     }  
 else if((n<50)&&(n>=40)){
     result="The gread is : D";
     } 
else{
    result="The gread is : Fail";
}

document.getElementById("result151").innerHTML=result;
}

//solution 55

function  find_pt(){
    var a=document.getElementById("text43").value;
    var check_p=a.replace(/[^p]/g, "");
    var x=check_p.length;
    var check_t=a.replace(/[^t]/g, "");
    var y=check_t.length;
    var result =(x===y);
    document.getElementById("result33").innerHTML= "result is :"+result;

}
// solution 57
function copy(){
    var a=document.getElementById("text44").value;
   var result=a.repeat(2);
   document.getElementById("result34").innerHTML=result;

}

//solution 58
function myname(){
    var a=document.getElementById("text45").value;
   var result=a.substring(a.length -3);
var x=result+" " + result+" " + result +" "+ result;
   document.getElementById("result35").innerHTML=x;


}
//solution 59

function half_input(){
    var a=document.getElementById("text46").value;
var x=(a.length)/2;
var y=Math.floor(x);
var z=a.substring(0,y);
document.getElementById("result36").innerHTML=z;
}

//solution 67
function removing_first_last(){
    var a=document.getElementById("text57").value;
    if ((a.charAt(0)=="P")&&(a.charAt(length -1)=="P")){
var x=a.slice(1 , a.length -1);
var result=x;
    }else{
var result="undefine";
    }
    document.getElementById("result47").innerHTML=result;

}

//solution 68
function first_last_n_characters(){
    var a=document.getElementById("text58").value;
    var n=document.getElementById("text59").value;
    var a_len=a.length;
    var result;
if(a_len>=n){
var sub_str=a.substring(0,n);
var sub_str1=a.substring(a.length -n);
result=sub_str + sub_str1;
}else{
    result="undefine";
}
document.getElementById("result49").innerHTML=result;

} 

//solution 69
function three_sum(){
    var array_three=[20,25,30];
   var array_sum=array_three[0]+array_three[1]+array_three[2];
   document.getElementById("result50").innerHTML= "The sum is:"+array_sum;

}
//solution 70
function  rotate_elements_left(){
    var given_array=[10,15,20];
    var result=[given_array[1],given_array[2],given_array[0]];
    document.getElementById("result51").innerHTML= "Now the array is:"+result;

} 
//solution 71
function first_last_position(){
    var given_array=[1,20,4,5,10];
    var result;
    if((given_array[0]==1)||(given_array[given_array.length -1]==1)){
result="The input is True";
    }else{
        result="The input is False";
    }
    document.getElementById("result52").innerHTML=result;

}

//solution 72
function  first_ast_are_equal(){
    var given_array=[2,30,2];
    var result;
    var arrayf=given_array[0];
    var arrayl=given_array[given_array.length -1];
    if(arrayf=arrayl){
        result="First and Last are equal";
    }else{
        result="First and Last are not equal";
    }
    document.getElementById("result53").innerHTML=result;

}
//solution 74
function  larger_value(){
    var given_array=[10,25,45,15];
    var maxvalue=given_array[0]>given_array[3] ? given_array[0] : given_array[3];
    given_array[0]=maxvalue;
    given_array[1]=maxvalue;
    given_array[2]=maxvalue;
    given_array[3]=maxvalue;
    document.getElementById("result54").innerHTML=given_array;

}

//solution 75
function taking_middle_elements(){
    var a=[4,5,6];
    var b=[7,8,9];
   debugger;
    var new_array=[];
      new_array.push(a[1]);
     new_array.push(b[1]);
     document.getElementById("result55").innerHTML= new_array;

}

//solution 76
function taking_first_last_elements(){
    var given_array=[4,6,8];
    var result;
    if(given_array.length>=1){
        array_f=given_array[0];
        array_l=given_array[2];
        result=  new_array=[];
       new_array.push(array_f,array_l);
    }else{
        result="input is wrong";
    }
    document.getElementById("result56").innerHTML= result;

} 
//solution 77
function contains_1or3(){
    var given_array=[1,5];
    var result;
    if(given_array[0]==1 || given_array[1]==1 || given_array[0]==3 || given_array[1]==3){
result="True";
    }else{
        result="False";
    }
    document.getElementById("result57").innerHTML= result;

}
//solution 78

function not_contains_1or3(){
    var given_array=[4,7];
    var result;
    if(given_array[0]!=1 || given_array[1]!=1 || given_array[0]!=3 || given_array[1]!=3){
result="True";
    }else{
        result="False";
    }
    document.getElementById("result58").innerHTML= result;
}

//solution 79
function and_40_twice(){
var given_array=[30,30];
var result;
if(((given_array[0]==30) &&(given_array[1]==30))||((given_array[0]==40) &&( given_array[1]==40))){
    result="The input is True";
}else{
    result="The input is False";
}
document.getElementById("result59").innerHTML= result;

}
//solution 80
debugger;
function exchange_value(){
    var given_array=[5,8,20,6];
    given_array[0,given_array.length -1]=given_array[given_array.length -1 ,0];
    document.getElementById("result60").innerHTML= given_array;

}





