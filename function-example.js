/*
function functionName(perameter){
    function body
    return
}

var returnedvalue = functionName(parameters value)
*/ 

// function getAverage (assignment1, assignment2, assignment3){
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// }

// const assignment1 = 60;
// const assignment2 = 58;
// const assignment3 = 59;

// var myAverage = getAverage(assignment1, assignment2, assignment3);
// console.log('my average so far:', myAverage);

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log('finalResult:', finalResult);