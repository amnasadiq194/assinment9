//chap no 1.
//  q1.write a script to greet your website visitor using js alert box?

alert("welcome to javascrit");


// q2: write a script to display following message on your web page?

alert("error! please enter a valid password");


// q3:. write a script to display following message on your webpage (hint  use line break)?

alert("welcome to js land \nhappy coding 🙂");


// q4: write a script to display following messages in sequence:?

alert("welcome to js land");
alert("happy coding.. 🙂 \n prevent this page from creating additional dialouge " );


// chap no 2

// q1: declare a variable called username.

var username ="amna";

// q2. declare a variable called myname & assign to it a string that represents your full name?

var myname= "amna sadiq";
//  document.write(myname);

//  q3. write script to
//  a) declare a js variable, titled message.
//  b) assign “hello world” to variable message
//  c) display the message in alert box


var title="hello world";
alert(title);


// q4:write a script to save student’s bio data in js variables and show the data in alert boxes.

var name="he is jhon";
var age="he is 19 years old";
var proff="he is programmer";

alert(name);
alert(age);
alert(proff);



// q5:. write a script to display the following alert using one js variable:

 
var pi="pizza\npizz\npiz\npi\np"
alert(pi);


// q6: declare a variable called email and assign to it a string that represents your email address(e.g. example@example.com)show the blow mentioned message in an alert box.(hint: use string concatenation)



var email="amnasadiq123456@gmail.com";

alert('this is my ' +email+ ' address');


// q7:. declare a variable called book & give it the value “a smarter way to learn javascript”. display the following message in an alert box:

var book='a smarter way to learn javascript';
 alert(book);

//  8. write a script to display this in browser through js


 document.writeln('yeah! i can write html content thorugh javascript <br><br>');


// q9:. store following string in a variable and show in alert and browser through js
 
var abc="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(abc);




// chap no 3:

// q1:. declare a variable called age & assign to it your age. show your age in an alert box.
 var age=21;

 alert("i am " +age+ " years old");



 var n=0;
 var x=++n;
 alert("you have visited " +x+ " times");


//  q2:declare a variable called birthyear & assign to it your  birth year. show the following message in your browser

var birthyear=2000;

document.writeln("<br> my birth year is " + birthyear+ " <br>data type of my declared variable is a number <br>");


// q3: a visitor visits an online clothing store
// www.xyzclothing.com . write a script to store in variables
// the following information:
// a. visitor’s name
// b. product title
// c. quantity i.e. how many products a visitor wants to
// order
// show the following message in your browser: “john
// doe ordered 5 t-shirt(s) on xyz clothing store"


var visname="jhon";
var product="t-shirts";
var quantity=15;

document.writeln("<br> <b>" + visname+ "</b> ordered  <b>" + quantity + product+ " </b> on xyz clothing store <br> <br>");




// chap no 5

// q1:. write a program that take two numbers & add them in a new variable. show the result in your browser.

var num1=5;
var num2=3;

var add=num1+num2;

document.write("the addition of " + num1 + " and " + num2 + " is " + add+ " <br>" );

// q2: repeat task1 for subtraction, multiplication, division & modulus.
  
var sub=num1-num2;
document.write("the subtraction of " + num1 + " and " + num2 + " is " + sub+ "<br> <br>");

var multiplication=num1*num2;
document.write("the multiplication of " + num1 + " and " + num2 + " is " + multiplication+ "<br> <br>");

var division=num1/num2;
document.write("the divisiom of " + num1 + " and " + num2 + " is " + division+ "<br> <br>");

var modulus=num1%num2;
document.write("the remainder of " + num1 + " and " + num2 + " is " + modulus+ "<br> <br>");




// q no 3:




var a=
document.write("value after variable declaration is "+a + "<br><br>");
 var a= 5;

 document.write("inital value is: " +a+ "<br><br>");

 var inc= ++a;
 document.write("after increment: " +inc+ "<br> <br>");

 var addition=inc+7;
 document.write("after increment the value is: " +addition+ "<br> <br>");

 var dec= --addition;
 document.write("after decrement the value is: " +dec + "<br><br>");
  var divide= dec/3;
  document.write("the remainder is: " +divide+ "<br> <br>");


//   q4:. cost of one movie ticket is 600 pkr. write a script to 
//   store ticket price in a variable & calculate the cost of buying 5 
//   tickets to a movie. 


var ticket=600;
var total= ticket*5;

document.write("<h4>the total cost of tickets is <b>" + total +"pkr </b></h4>");


// q5:5. write a script to display multiplication table of any number in your browser


var ar=4;
document.write("table of: " +ar);
var i=1;
for(i=1; i <= 10; i++)
document.write("<br>"+ar+"x"+i+"="+(i*ar));

//ch 4
//q1 1. Declare 3 variables in one statement. 

var variable1 = "Hello, World!";
var variable2 = "Testing...";
var variable3 = 42;
//q2 . Declare 5 legal & 5 illegal variable names.

var MYVAR=10;
var $=100;
var alert [a];
var a=9;
var b= amna;

//. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
var heading = "rules fir naming JS variables";
//b) Variable names can only contain _number_____, ___dollar sign___,
//__letter____ and ___underscores___.
//For example $my_1stVariable
//c) Variables must begin with a __variable____, __underscores___ or
//__dollarsign___. For example $name, _name or name
//d) Variable names are case _____sensitive____
//e) Variable names should not be JS __capital_____

