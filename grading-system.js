// only condition 
// var mark = 69;
// if (mark >= 101 || mark < 0) {
//     console.log('please provide a valid mark');
// }
// else if (mark >= 80 && mark <= 100) {
//     console.log('Your Garde is: A+');
// }
// else if (mark >= 70 && mark <= 79) {
//     console.log('Your Garde is: A');
// }
// else if (mark >= 60 && mark <= 69) {
//     console.log('Your Garde is: A-');
// }
// else if (mark >= 50 && mark <= 59) {
//     console.log('Your Garde is: B');
// }
// else if (mark >= 40 && mark <= 49) {
//     console.log('Your Garde is: C');
// }
// else if (mark >= 33 && mark <= 39) {
//     console.log('Your Garde is: D');
// }
// else {
//     console.log('Your Garde is: F');
// }

//grading system using function

// function gradCalculator(mark) {
//     if (mark >= 101 || mark < 0) {
//         return 'please provide a valid mark';
//     }
//     else if (mark >= 80 && mark <= 100) {
//         return 'Your Garde is: A+';
//     }
//     else if (mark >= 70 && mark <= 79) {
//         return 'Your Garde is: A';
//     }
//     else if (mark >= 60 && mark <= 69) {
//         return 'Your Garde is: A-';
//     }
//     else if (mark >= 50 && mark <= 59) {
//         return 'Your Garde is: B';
//     }
//     else if (mark >= 40 && mark <= 49) {
//         return 'Your Garde is: C';
//     }
//     else if (mark >= 33 && mark <= 39) {
//         return 'Your Garde is: D';
//     }
//     else {
//         return 'Your Garde is: F';
//     }
// }

// var result = gradCalculator(99);
// console.log(result);


// grading system using switch case 

//var mark = 88;

// switch (true) {
//     case mark >= 101 || mark < 0:
//         console.log('please provide a valid mark');
//         break;
//     case mark >= 80 && mark <= 100:
//         console.log('Your Garde is: A+');
//         break;
//     case mark >= 70 && mark < 79:
//         console.log('Your Garde is: A');
//         break;
//     case mark >= 60 && mark < 69:
//         console.log('Your Garde is: A-');
//         break;
//     case mark >= 50 && mark < 59:
//         console.log('Your Garde is: B');
//         break;
//     case mark >= 40 && mark < 49:
//         console.log('Your Garde is: C');
//         break;
//     case mark >= 33 && mark < 39:
//         console.log('Your Garde is: D');
//         break;

//     default:
//         console.log('Your Garde is: F');
//         break;
// }

//grading system using function and switch case

function gradClacolation(mark) {
    switch (true) {
        case mark >= 101 || mark < 0:
            return 'please provide a valid mark';
            break;
        case mark >= 80 && mark <= 100:
            return 'Your Garde is: A+';
            break;
        case mark >= 70 && mark < 79:
            return 'Your Garde is: A';
            break;
        case mark >= 60 && mark < 69:
            return 'Your Garde is: A-';
            break;
        case mark >= 50 && mark < 59:
            return 'Your Garde is: B';
            break;
        case mark >= 40 && mark < 49:
            return 'Your Garde is: C';
            break;
        case mark >= 33 && mark < 39:
            return 'Your Garde is: D';
            break;

        default:
            return 'Your Garde is: F';
            break;
    }

}
var grad = gradClacolation(77);
console.log(grad);

//color code using switch

// var color = 'red';

// switch (color) {
//     case 'blue':
//         console.log('your color is blue');
//         break;
//     case 'green':
//         console.log('your color is green');
//         break;
//     case 'red':
//         console.log('your color is red');
//         break;
//     case 'yellow':
//         console.log('your color is yellow');
//         break;
//     case 'pink':
//         console.log('your color is pink');
//         break;
//     case 'white':
//         console.log('your color is white');
//         break;

//     default:
//         console.log('your color is black');
//         break;
// }