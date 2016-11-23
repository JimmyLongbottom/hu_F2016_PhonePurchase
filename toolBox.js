(function (exports){

	var myInfo = {
		name: "Tim Sawyer",
		date: "11-14-2016",
		projectName: "JavaScript Library",
		school: "Hack University",
		course: "JavaScript Foundations"
	};


	}



	//Check if a number is even
	exports.isEven = function(num) 
	{
		if( (num % 2) === 0 ) 
			{
			return true;
			}
		else if (isNaN(num)) 
			{
			return 'Only numbers are allowed!';
			} 
		else 
			{
			return 'Number not divisible by 2';

			}
		console.log(exports.isEven(325));	
	};


	//Reverse an Array
	exports.reverseArray = function(array) {
	  var invertedArray = [];

	  while( i = array.pop() )
	  	invertedArray.push( i );
	  
	  return invertedArray;
	};

	//Grade Assigner
	exports.assignGrade = function(score) {
	    if (score > 90) {
	        return 'A';
	    } else if (score > 80) {
	        return 'B';
	    } else if (score > 70) {
	        return 'C';
	    } else if (score > 65) {
	        return 'D';
	    } else {
	        return 'F';
	    }
	}:

	//console.log('You got a ' + assignGrade(95));
	//console.log('You got a ' + assignGrade(65));
	

	//Guess a Number Between 1 & 6
	exports.guessNumber = function(){
		var correctGuess = false;
		var randomNumber = Math.floor(Math.random()*6)+1;
		var guess = prompt('pick a number between 1 and 6');

		if (parseInt(guess) === randomNumber) {
			correctGuess = true;
		  console.log('you got it!')
			//document.write('you got it!')
		} else if (parseInt(guess) > randomNumber){
			console.log("too high guy!" + " the number was " + randomNumber+ "!");	
		  //document.write("too high guy!" + " the number was " + randomNumber+ "!");
		} else if (parseInt(guess) < randomNumber){
			console.log("too low joe" + " the number was " + randomNumber+ "!");
		  //document.write("too low joe" + " the number was " + randomNumber+ "!");
		}

		{
			console.log("Sorry, the number was " + randomNumber+ "!");
			//document.write("Sorry, the number was " + randomNumber+ "!");
		}
	};



	//fizzBuzz
	exports.fizzBuzz = function(){
	for (var i =1 ; i <= 100; i++){

		  //For numbers divisible by 3, print "Fizz" instead of the number
		if (i%3 === 0){
			console.log("Fizz");
		  //For numbers divisible by 5 (and not 3), print "Buzz"
			}else if (i%5 === 0 && i%3 !==0){
			console.log("Buzz");
		  //For numbers that are divisible by both 3 and 5, print "FizzBuzz"	
			}else if (i%5 === 0 && i%3 === 0){
			console.log("FizzBuzz");
		  //if none of the above conditions are met, log the number.
			}else{
			console.log(i);
			}
		}
	};


	//log numbers 1-100
	exports.logNum= function(){
		for (var i =0 ; i <= 100; i++)
			console.log(i);
	};

	//Calculate sum -array
    exports.calcSum = function(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum;
    };


    //Hash Triangle
    exports.hTriangle = function(){
    	for (var i = 0; i < 8 ; i++){
			console.log(("#").repeat(i));
		}
	}:



	//Months
	(function(exports) {
		var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


		exports.name = function(number) {
		return names[number];
		};
		exports.number = function(name) {
		return names.indexOf(name);
		};


	//Prototypal Inheritance

	//Person
		exports.Person = function(){
			firstName, lastName) {
		  	this.firstName = firstName;
		  	this.lastName = lastName;
		}

		exports.Person.prototype.fullName = function() {
		 return this.firstName + " " + this.lastName; 
		};

		//Student
		exports.Student = function(firstName, lastName, roomNumber) {
		  Person.call(this, firstName, lastName)
		  }

		  this.room = roomNumber;

		  exports.Student.prototype = Object.create(Person.prototype);


		}
		exports.Student.prototype.studentInfo = function(){
			console.log(this.firstName + " " + this.lastName + " ," + this.roomNumber);

		};

	
}) (typeof window === "undefined" || window === null ? global.toolBox = {} : window.toolBox = {} : this.toolBox);





//****************************************************************
//Tests
	/*
	console.log(toolBox.isEven(57));
	console.log(toolBox.reverseArray(["A", "B", "C"]));
	console.log('You got a ' + toolbox.assignGrade(95));
	toolBox.guessNumber();
	toolBox.fizzBuzz();
	toolBox.logNum();
	toolBox.calcSum("bearGod"); //String or Array??
	toolBox.hTriangle();
	console.log(toolBox.names.name(6));
	console.log(tooolbox.names.number("December"))

	var dude = new toolBox.Student("Tim", "Sawyer", 420);
	console.log(dude.firstName);
	*/
