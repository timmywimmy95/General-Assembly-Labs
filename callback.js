
    // Create a function that takes a parameter and logs it
    // Create a second function that logs 'hi'
    // Invoke the first function, passing in the second function as a parameter
    // You should see a function reference being logged
    // Alter the first function so that it invokes its parameter
    // If you did these steps correctly, you should get a log of 'hi'

const newFunc = (head) => {
    head();
}
const sayHi = () => {
    console.log("Hi")
}

// newFunc(sayHi);

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');
//hi

const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

// foo(bar, 'hi');
//hello
const baz = (param) => {
    console.log(param.toUpperCase());
}

// foo(baz, 'hello')
//"HELLO"

const electricMixer = (attachment) => {
    console.log(`This mixer is now:  ${attachment()}`)
}

// electricMixer(() => {
//     return "spiralizing";
//   });

const spiralizer = () => {
    return "spiralizing"
}
// electricMixer(spiralizer)

const slicerDicer = () => {
    return "slicin\' and dicin\'"
}
// electricMixer(slicerDicer)

const pastaMama = () => {
    return "rolling em flat"
}
// electricMixer(pastaMama)

// functionName(CALLBACK, MILLISECONDS)
// setTimeout(() => {
//     console.log('hi');
// }, 2000);

// setInterval(() => {
//     console.log('hi');
//   }, 2000);

// let sum = 0;
// setInterval(()=>{
//     sum += 1
//     console.log(sum)
// },1000)

// Create a function called wordReverse that reverses a string.

const wordReverse = (string) => {
    let reversedStrArr = string.toLowerCase().split(" ").reverse()
    let reversedStr = reversedStrArr.join(" ")
    return reversedStr
}
// wordReverse("hello i am")

// Create a function called toUpperCase that capitalizes every letter in a string.
const toUpperCase = (string) => {
    let strArr = string.split(" ")
    // console.log(strArr)
    let strCaps = strArr.map(letter => letter.toUpperCase());
    return strCaps.join(" ");
}

// console.log(toUpperCase("timothy is dumb"))

// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.

const repMaster = (input, func) => {
    return func(input) + " proves that I am the rep MASTER!";
}

console.log(repMaster("Never give your heart to a blockhead", wordReverse));

console.log(repMaster("I finished this practice", toUpperCase))

