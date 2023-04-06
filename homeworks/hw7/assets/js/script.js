function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum/3;
    return avg;
}


function createSentence(num, noun) {
    let sen = "On average, a Berkeley student has " + num + " " + noun + "s";
    return sen;
}

function getRandomNum(max){
    return Math.random(max);
}

let x = 10;
let y = 15;
let z = 6;

let avg = averageThreeNumbers(x,y,z);
let sentence = createSentence(avg, "deer");

console.log(sentence);