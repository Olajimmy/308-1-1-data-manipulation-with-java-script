
//question 1
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

console.log("check is all numbers are divisible by 5")
let ans;
ans= n1/5;
console.log("the first number divided 5 =:",ans);

ans = n2/5;
console.log("the second number divided 5 =:",ans);

ans = n3/5;
console.log("the third number divided 5 =:",ans);

ans = n4/5;
console.log("the fourth number divided 5 =:",ans);

//check if the first number is larger than the last
console.log("check if the first number is larger than the last")
let larger;
larger = (n1>n4);
console.log(larger)

//accomplish the following arithmetic chain
//addition
console.log("accomplish the following arithmetic chain");

sum = n1 - n2;
console.log(sum);
//multiplication
multi = sum * n3;
console.log(multi);
//modulo or mod
result= multi % n4;
console.log(result);



//confirm before submitting
console.log("change isOver25 how it calculates so we dont have to use ! operator")
//change isOver25 how it calculates so we dont have to use ! operator
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("is not over 25",isOver25)

//question 2
console.log("======================Question 2==================== ")
console.log("how many gallons of fuel needed for the entire trip");

const distance = 1500;
let mpg = 30;
//gallons needed for the entire trip at 55mph
let gal_needed_55 = distance / mpg;
console.log('At 55mph, the amount of gallons needed =:', gal_needed_55);
//gallons needed at 60mph
 mpg = 28;
let gal_needed_60 = distance / mpg;

console.log('At 60mph, the amount of gallons needed =:',gal_needed_60)

//gallons needed at 75mph
mpg = 23;
let gal_needed_75 = distance / mpg;
console.log('At 75mph, the amount of gallons needed =:',gal_needed_75)

//will your budget be enough to cover the full expense?
//at 55mph
const cost_per_gal = 3;
let fuel_amount1 = cost_per_gal * gal_needed_55;
console.log('Total fuel cost at 55 mph = $', fuel_amount1);

//at 60mph
let fuel_amount2 = cost_per_gal * gal_needed_60;
console.log('Total fuel cost at 60 mph = $', fuel_amount2);


//at 75 mph
let fuel_amount3 = cost_per_gal * gal_needed_75;
console.log('Total fuel cost at 75 mph = $', fuel_amount3);


//checking the budget
let fuel_budget = 175;
console.log("Will your budget be enough to cover your fuel expenses?", (fuel_budget >= fuel_amount1));




