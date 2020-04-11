//Create your function below this line.

//Creat a function named bmiCalculator with heigh and weight params
// then we have to define bmi. so creat a variable named bmi.
//then return bmi.

function bmiCalculator (weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}

/* if my weight is 65kg and my height is 1.8m, I should be able to call your function linke this:

var bmi = bmiCalculator(65,1.8);

bmi should equal around 20 in this case.

*/
