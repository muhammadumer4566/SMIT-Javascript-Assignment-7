//! JS Assignment Chapter 38 to 42

// ? Q1)

// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     }
//     else {
//         let result = 1;
//         for (let i = 0; i < b; i++) {
//             result *= a;
//         }
//         return result;
//     }
// }
// let base = 4;
// let exponent = 4;
// let result = power(base, exponent);
// document.write(base + "^" + exponent + "=" + result);

// ? Q2)

// function leapYear(year) {
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;
// }
// let yearInput = +prompt("Enter a year!");
// if (leapYear(yearInput)) {
//     document.write( yearInput + " is a leap year");
// }
// else {
//     document.write( yearInput + " is not a leap year");
// }

// ? Q3)

// function Semi(a, b, c) {
//     return (a + b + c) / 2;
// }

// function TriangleArea(a, b, c) {
//     let s = Semi(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// let A = 9;
// let B = 7;
// let C = 5;
// let triangleArea = TriangleArea(A, B, C);
// document.write(`The area of the triangle ${A}, ${B}, and ${C} is ${triangleArea}`);

// ? Q4)

// function Average(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function Percentage(subject1, subject2, subject3, totalMarks) {
//     let ObtainedMarks = subject1 + subject2 + subject3;
//     return (ObtainedMarks / (totalMarks * 3)) * 100;
// }

// function mainFunction(subject1, subject2, subject3) {
//     let average = Average(subject1, subject2, subject3);
//     let totalMarks = 100;
//     let percentage = Percentage(subject1, subject2, subject3, totalMarks);

//     document.write("Marks in Subject 1 : " + subject1 + "<br>");
//     document.write("Marks in Subject 2 : " + subject2 + "<br>");
//     document.write("Marks in Subject 3 : " + subject3 + "<br>");
//     document.write("Average Marks : " + average + "<br>");
//     document.write("Percentage: " + percentage + "%");
// }
// let subject1Marks = 75;
// let subject2Marks = 66;
// let subject3Marks = 78;
// mainFunction(subject1Marks, subject2Marks, subject3Marks);

// ? Q5)

// function IndexOf(inputString, searchChar) {
//     for (let i = 0; i < inputString.length; i++) {
//         if (inputString[i] === searchChar) {
//             return i;
//         }
//     }
//     return -1;
// }
// let inputString = "Muhammad, Umer";
// let searchChar = "m";
// let result = IndexOf(inputString, searchChar);
// if (result !== -1) {
//     document.write(`The character "${searchChar}" is found at index ${result}.`);
// } 
// else {
//    document.write(`The character "${searchChar}" is not found in the string.`);
// }

// ? Q6)

// function removeVowels(sentence) {
//     let vowel = /[aeiouAEIOU]/g;
//     let result = sentence.replace(vowel, '');
//     return result;
// }
// let inputSentence = "My name is muhammad umer";
// let resultsentence = removeVowels(inputSentence);
// document.write(resultsentence);

// ? Q7)

// function SuccessVowels(text) {
//     let count = 0;
//     text = text.toLowerCase();
//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;

// }
// let text = "Please read my name is muhammad umer check with vowels in succession.";
// let result = SuccessVowels(text);
// document.write(`Number of successive vowels: ${result}`);

// ? Q8)

// function kilometersToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84;
// }

// function kilometersToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000;
// }
// const distance = parseFloat(prompt("Enter the distance between two cities:"));

// let distanceInMeters = kilometersToMeters(distance);
// let distanceInFeet = kilometersToFeet(distance);
// let distanceInInches = kilometersToInches(distance);
// let distanceInCentimeters = kilometersToCentimeters(distance);

// document.write(`Distance in meters: ${distanceInMeters} meters` + "<br>");
// document.write(`Distance in feet: ${distanceInFeet} feet` + "<br>");
// document.write(`Distance in inches: ${distanceInInches} inches` + "<br>");
// document.write(`Distance in centimeters: ${distanceInCentimeters} centimeters`);

// ? Q9)

// function OvertimePay(workhours) {
//     let regularHours = 40;
//     let overtimeRate = 12.00;

//     if (workhours <= regularHours) {
//         return 0;
//     }
//     else {
//         let overtimeHours = workhours - regularHours;
//         let overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     }
// }
// let workhours = 49;
// let overtimePay = OvertimePay(workhours);
// document.write(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);

// ? Q10)

// function CurrencyNotes(amount) {

//     let hundreds = 0;
//     let fifties = 0;
//     let tens = 0;

//     while (amount >= 100) {
//         amount -= 100;
//         hundreds++;
//     }

//     while (amount >= 50) {
//         amount -= 50;
//         fifties++;
//     }

//     while (amount >= 10) {
//         amount -= 10;
//         tens++;
//     }
//     console.log("Number of 100s:", hundreds);
//     console.log("Number of 50s:", fifties);
//     console.log("Number of 10s:", tens);
// }
// let Withdraw = parseInt(prompt("Enter  amount to  withdrawn:"));
// CurrencyNotes(Withdraw * 100);