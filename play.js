
// budget app

document.getElementById("submit").addEventListener("click", formdata);
var totalbudget = 0; var income = 0; var expenses = 0;
var Inc = [];
var Exp = [];
function formdata() {
	var  name  = document.querySelector('#name').value;
	name = parseInt(name);
	if (isNaN(name)) {
		document.querySelector('#nameErr').textContent = 'this should be an numeric value';
		return false;

	}
	var  model = document.querySelector('#model').value;
    if (model === 'inc') {
    	totalbudget += name;
    	Inc.push(name);
    	document.querySelector('#income').insertAdjacentHTML("beforeend", "<div class='alert-success mt-1 p-2'> &#8377; " + name + "</div>");
    	document.querySelector('#name').value = '';
    }

    else if(model === 'exp') {
    	var percent = (name*100)/totalbudget;
    	totalbudget = totalbudget - name;
    	console.log(percent);   	
    	Exp.push(name);
    	document.querySelector('#expenses').insertAdjacentHTML("beforeend", "<div class='alert-danger mt-1 p-2'> &#8377; " + name + "</div>");
    	document.querySelector('#name').value = ''; 
    
    }

    var total = {
    	INCOME: 0,
    	EXPENSES: 0
    }
    // console.log('income ' + Inc + ' expenses ' + Exp);
    total.INCOME = Inc.reduce(function(a, b){
        return a + b;
    }, 0);
    total.EXPENSES = Exp.reduce(function(c, d){
        return c + d;
    }, 0);

    document.querySelector('#totalincome').innerHTML = '&#8377; ' + total.INCOME;
    document.querySelector('#totalexpenses').innerHTML = '&#8377; ' + total.EXPENSES;
    document.querySelector('#total').innerHTML = '&#8377; ' + totalbudget;
}


 
// document.getElementById("submit").addEventListener("click", formdata);
// function formdata(){
//     var err = [];
//     console.log('re');
//    	var name = document.querySelector('#name').value;
//    	var email = document.querySelector('#email').value;
//    	if (name == '' || name == null ) {
//        err.push('name is required');
//        document.querySelector('#nameErr').textContent = err;
//    	}
//    	if(email == '' || email == null) {
//    		err.push('email is required');
//    		document.querySelector('#emailErr').textContent = err;
//    	}
   	
//    	return {
//    		name: name,
//    		email: email
//    	}
// }
// console.log();

    



// var a = [];
// var years = [1990,1991,1992,1993,1994];
// for (var i = 0; i < years.length;  i++) {
	 
// 	 a.push(2020 - years[i]);
// 	 console.log(a);

// } 

// console.log(a);
// var ctrl = (function(a,b){
// 	var sum,Multiplication,divison;
// 	sum = a+b;
// 	Multiplication = a*b;
// 	divison = a/b;
// 	return {
// 		sum: sum,
// 		multiplication: Multiplication,
// 		divison:divison,

// 	}
// })(100,2);

// var studentRecord =  (function(btrl) {
// 	btrl.rollNumber = 1503510044;
//      var studentRecord  = {

//            name: 'Lakshit',
//            rollNumber: btrl.rollNumber,
//            maths: btrl.sum,
//            english: btrl.divison,
//            physics: btrl.multiplication
//      }	
// 	return studentRecord;
// })(ctrl);
// console.log(typeof(studentRecord));
// console.log(studentRecord);

// function taking argument another function


// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isRetired(el) {
// 	if (el > 65) {
// 		return 'retired';
// 	}
// 	else if(el < 18) {
// 		return 'not eligible for job';
// 	}
// 	else {
// 		return 'serving';
// 	}
// }

//  var ages = arrayCalc(years,calculateAge);
//  var check = arrayCalc(ages,isRetired);
//  console.log(ages ,check);







// function returning a function 



// function interviewQuestion(job){
// 	if (job === 'teacher') {
// 		return function(name) {
// 			console.log(name  + ". Are you a Teacher?");
// 		}
// 	}
// 	else {
// 		return function(name) {
// 			console.log("hello "+ name + " What do you do? ");
// 		}
// 	}
// }


// var ask = interviewQuestion("teacher")('lakshit');








// IIFE

// var akhshu = (function(par1,par2){
//      console.log(par2+par1);
// })(5,3);


// function constuctor to create objects


// var Person = function(name,age,job){
// 	this.name = name,
// 	this.age = age,
// 	this.job =job
// };

// Person.prototype.lastName = 'Smith';
// var kamal = new Person("kamal",22,'teacher');

// console.log(kamal);

// var Lakshit = new Person('Lakshit',22,'Developer');

// console.log(Lakshit);






















 // var akshu = {
// 	name:"akshu",
// 	age:22,
// 	address:"Kisola",
// 	distt:"Bulandshahr",
// };

// console.log(akshu);

// akshu.yearOfBirth = 1998;

// console.log(akshu);
// console.log(akshu.hasOwnProperty('yearOfBirth'));