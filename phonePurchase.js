//Hack University Fall 2016 javaScript Foundations Course: Project Assignment #1


/*Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance."
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
*/



//You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold.
const tax_Rate = 0.08;
const phone_Price = 629;
const acc_Price = 89;
const spend_Cap = 5400;

//a variable for your "bank account balance."
var bank_Balance = 13400;

//variable to hold purchase amount.
var purch_Amt = 0;

//Spares
	//var phonesPurchased = 0; 
	//var accessoriesPurchased = 0;

//Define a function for formatting the price with a "$" and rounding to two decimal places.
function formatPrice(purchAmt){
	return "$" + purch_Amt.toFixed( 2 );
}


//Define define a function for calculating the tax
function calcTax(purchAmt) {
	return purch_Amt * tax_Rate;
}




//You will keep purchasing phones until you run out of money in your bank account. 
while (purch_Amt < bank_Balance){
	purch_Amt = purch_Amt + phone_Price;

		if(purch_Amt < spend_Cap){
		//add and accessory each phone as long as your purchase amount is below your mental spending threshold.
			purch_Amt = purch_Amt + acc_Price;	
	}
}
//add in the tax,
purch_Amt = purch_Amt + calcTax( purch_Amt );


//then print out the calculated purchase amount, properly formatted
console.log("Your total is " + formatPrice(purch_Amt));


if (purch_Amt > bank_Balance){
		console.log("Dude, you can't afford this!");

}
