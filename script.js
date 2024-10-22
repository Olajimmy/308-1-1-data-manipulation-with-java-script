
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
let mpg1 = 30;
//gallons needed for the entire trip at 55mph
let gal_needed_55 = distance / mpg1;
console.log('At 55mph, the amount of gallons needed =:', gal_needed_55);
//gallons needed at 60mph
 let mpg2 = 28;
let gal_needed_60 = distance / mpg2;

console.log('At 60mph, the amount of gallons needed =:',gal_needed_60)

//gallons needed at 75mph
let mpg3 = 23;
let gal_needed_75 = distance / mpg3;
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
console.log("Will your budget be enough to cover your fuel expenses at 55mph?", (fuel_budget >= fuel_amount1));
console.log("Will your budget be enough to cover your fuel expenses at 60mph?", (fuel_budget >= fuel_amount2));
console.log("Will your budget be enough to cover your fuel expenses at 75mph?", (fuel_budget >= fuel_amount3));


// trip duration
console.log('How long will the trip take in hours');
let mph1 = 55;
let mph2 = 60;
let mph3 = 75;
let duration2;
let duration3;
let duration1 = distance / mph1;
console.log('At 55mph, it will take',duration1 + " "+"hours to get to our destination");
duration2 = distance / mph2;
console.log('At 60mph, it will take',duration2 + " "+"hours to get to our destination");
duration3 = distance / mph3;
console.log('At 75mph, it will take',duration3 + " "+ "hours to get to our destination");

//result comparison
if (fuel_amount1<fuel_amount2 && fuel_amount1 < fuel_amount3){
    let cheap =fuel_amount1
    console.log("the cheapest amount for the trip is:", fuel_amount1)
}else if(fuel_amount2 <fuel_amount1 && fuel_amount2 < fuel_amount3) {
    cheap=fuel_amount2
    console.log("the cheapest amount for the trip is:", fuel_amount2)

}else{
    cheap = fuel_amount3;
    console.log("the cheapest amount for the trip is:", fuel_amount3)

}

//cheap = ( fuel_amount1 < fuel_amount2 && fuel_amount1 < fuel_amount3);
 //console.log("the cheapest budget is:",) ;
   // console.log(fuel_amount1 + `makes more sense because it uses" ${mpg1} miles "per gallons` );
   // console.log(duration2, duration3 + "are more than", duration1);





