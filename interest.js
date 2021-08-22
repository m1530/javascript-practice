// Simple Interest = P x R x T ÷ 100, where P = Principal, R = Rate of Interest and T = Time Period of the Loan / Deposit in years.

function simpleInterest(principal, rate, time) {

    const interest = principal * rate * time / 100;
    return interest;
}

let principal = 100000;
let rate = 12;
let time = 1 / 2;

var result = simpleInterest(principal, rate, time);
console.log(result);