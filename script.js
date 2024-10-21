
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

console.log("change isOver25 how it calculates so we dont have to use ! operator")
//change isOver25 how it calculates so we dont have to use ! operator
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("is not over 25",isOver25)

