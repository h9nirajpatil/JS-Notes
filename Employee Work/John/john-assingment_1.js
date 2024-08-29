// 1.	Write a program that checks if a number entered by the user is positive. If it is, print "The number is positive.

function isPositiveInteger(number) {
  if (number > 0) {
    console.log("The number is positive.");
  } else {
    console.log("The number is not positive.");
  }
}

// 2.	Write a program that checks if a number entered by the user is even or odd. Print "Even" if the number is even and "Odd" if the number is odd.

function oddEven(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");

  }
}

// 3.	Write a program that takes a number as input and prints "Negative" if it is less than 0, "Zero" if it is 0, and "Positive" if it is greater than 0.

function numberSign(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number === 0) {
    console.log("Zero");
  } else {
    console.log("Negative");
  }
}

// 4.	Write a program that takes three numbers as input and prints the largest of the three. Use nested if statements to determine the largest number.

function largeNumber(a, b, c) {
  let container;
  if (a > b) {
    container = a;
  } else {
    container = b;
  }

  if (container > c) {
    console.log(container);
  } else {
    console.log(c);
  }
}

// 5.	Write a program that takes a grade as input (A, B, C, D, F) and prints a message: "Excellent" for A, "Good" for B, "Average" for C, "Poor" for D, and "Fail" for F. Use a switch statement to handle this.

function gradeRemark(grade) {
  switch (grade) {
    case "A":
      console.log("Excelent");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Average");
      break;
    case "D":
      console.log("Poor");
      break;
    case "F":
      console.log("Fail");
      break;

    default:
      break;
  }
}

// 6.	Write a program that prints the first 10 natural numbers using a for loop. 

function naturalNumber() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 7.	Write a program that prints numbers from 1 to 5 using a do-while loop.

function doWhileLoop() {
  let i = 1;
  do {
    console.log(i);
    i++;
  }
  while (i <= 5)
}

// 8.	Write a program that prints the multiplication table of 5 using a while loop.

function multiplesOfFive() {
  for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
  }
}

// 9.	Given an object {name: "John", age: 25, city: "New York"}, write a program that uses a for-in loop to print all the properties and their values.

function objectIteration() {
  let obj = { name: "John", age: 25, city: "New York" };
  for (const key in obj) {
    console.log(key, ":", obj[key]);
  }
}

// 10.	Write a program that checks if a number entered by the user is greater than 100. If it is, print "The number is large.

function greaterThan100(number) {
  if (number > 100) {
    console.log("The nubmber is large");
  }
}


// 11.	Write a program that checks if a person is eligible to vote. If the person's age is 18 or older, print "Eligible to vote." Otherwise, print "Not eligible to vote."

function voterEligible(age) {
  if (age >= 18) {
    console.log("Eligible to vote.");
  } else {
    console.log("Not eligible to vote.");
  }
}

// 12.	Write a program that takes a temperature value and prints "Cold" if the temperature is below 0, "Warm" if the temperature is between 0 and 25, and "Hot" if the temperature is above 25.

function temperature(temparatureValue) {
  if (temparatureValue < 0) {
    console.log("Cold");
  } else if (temparatureValue > 25) {
    console.log("Hot");
  } else {
    console.log("Warm");
  }
}

// 13.	Write a program that takes a number as input and checks if it is divisible by 2 and 3. If it is, print "Divisible by both 2 and 3." Otherwise, check if it is divisible by only 2 or only 3 and print the appropriate message.

function divisibleBy2and3(number) {
  if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both 2 and 3.");
  } else if (number % 3 === 0) {
    console.log("Divisible by 3.");
  } else if (number % 2 === 0) {
    console.log("Divisible by 2.");
  } else {
    console.log("Enter number greater than 1");
  }
}

// 14.	Write a program that takes a day of the week as input (1 for Monday, 2 for Tuesday, etc.) and prints the name of the day using a switch statement.

function dayOfTheWeek(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("Enter number between 1-7");
      break;
  }
}

// 15.	Write a program that calculates the factorial of a number entered by the user using a for loop.

function factorial(number) {
  let factorialNum = 1
  for (let i = number; i > 0; i--) {
    factorialNum *= i
  }
  console.log(factorialNum);
}


// 16.	Write a program that asks the user to guess a predefined number. Keep asking until the user guesses the number correctly, and then print "Correct!" Use a do-while loop to implement this.

function guessTheNumber(number) {
  let magicalNumber = 21;
  do {
    console.log("try again");
  } while (number === magicalNumber)

}

// 17.	Write a program that takes a number as input and prints all the even numbers from 1 to that number using a while loop.

function evenTillNumber(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// 18.	Given an object {title: "Book", author: "John Doe", year: 2020}, write a program that uses a for-in loop to print the keys and values in the format "key: value".


function forInLoop2() {
  const obj = { title: "Book", author: "John Doe", year: 2020 }
  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }
}

// 19.	Write a program that checks if a character entered by the user is a vowel. If it is, print "The character is a vowel."

function isVowel(character) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === character) {
      console.log("The character is a vowel.");
    }
  }
}

// 20.	Write a program that checks if a string entered by the user is empty. If it is, print "The string is empty." Otherwise, print "The string is not empty.

function isEmptyString(str) {
  if (str.length === 0) {
    console.log("The string is empty.");
  } else {
    console.log("The string is not empty.");
  }
}

// 21.	Write a program that takes a person's age as input and prints "Child" if the age is less than 13, "Teenager" if the age is between 13 and 19, "Adult" if the age is 20 or older.

function isAge(age) {
  if (age < 13) {
    console.log("Child");
  } else if (age >= 20) {
    console.log("Adult");
  } else {
    console.log("Teenager");
  }
}

// 22.	Write a program that takes a number as input and prints whether it is positive, negative, or zero. Use nested if statements to check these conditions.

function numberSign(number) {
  if (number !== 0) {
    if (number > 0) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  } else {
    console.log("Zero");
  }
}

// 23.	Write a program that takes a month number (1 for January, 2 for February, etc.) and prints the number of days in that month. Use a switch statement to handle this, considering leap years for February.

function numberOfDaysInMonth(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log("Jan has 31 days");
      break;
    case 2:
      console.log("Feb has 28 days");
      break;
    case 3:
      console.log("Mar has 31 days");
      break;
    case 4:
      console.log("Apr has 30 days");
      break;
    case 5:
      console.log("May has 31 days");
      break;
    case 6:
      console.log("Jun has 30 days");
      break;
    case 7:
      console.log("Jul has 31 days");
      break;
    case 8:
      console.log("Aug has 31 days");
      break;
    case 9:
      console.log("Sept has 30 days");
      break;
    case 10:
      console.log("Oct has 31 days");
      break;
    case 11:
      console.log("Nov has 30 days");
      break;
    case 12:
      console.log("Dec has 31 days");
      break;
    default:
      console.log("Enter a valid Month Number");
      break;
  }
}

// 24.	Write a program that prints the Fibonacci series up to a given number using a for loop.

function fibonacciSeries(number) {
  let n1 = 0, n2 = 1, nextNumber;

  for (let i = 0; i < number; i++) {
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
  }
}

// 25.	Write a program that repeatedly asks the user to enter a number until they enter a negative number. Then print the sum of all entered numbers (excluding the negative number) using a do-while loop.

function guessTheNumber() {
  const num1 = 21;
  let guess;
  do {
    guess = Math.floor(Math.random() * 100)
    if (guess !== num1) {
      console.log("Incorrect, The correct num is", num1);
    }
  } while (guess !== num1)
  console.log("correct!");
}

// 26.	Write a program that calculates the sum of all numbers from 1 to a given number using a while loop.

function sunOfNumbers(number) {
  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);
}

// 27.	Given an object {product: "Laptop", price: 999.99, quantity: 10}, write a program that uses a for-in loop to print each property and its value in the format "property: value".

function objectIteration27() {
  const obj2 = { product: "Laptop", price: 999.99, quantity: 10 }
  for (const key in obj2) {
    console.log(key, ":", obj2[key]);
  }
}

// 28.	Write a program that checks if a user-provided string contains the letter "a". If it does, print "The string contains 'a'.

function hasCharInString(providedSting) {
  if (providedSting.includes("a")) {
    console.log("The string contains 'a'.");
  } else {
    console.log("The string does not contains 'a'.");
  }
}

// 29.	Write a program that checks if a given year is a leap year. Print "Leap Year" if it is, otherwise print "Not a Leap Year.

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, " is a Leap year");
  } else {
    console.log(year, " is not a leap year");
  }
}

// 30.	Write a program that takes a number grade (0-100) and prints the corresponding letter grade: "A" for 90-100, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.

function grades(grade) {
  if (60 >= grade && grade < 70) {
    console.log("Grade D");
  } else if (70 >= grade && grade < 80) {
    console.log("Grade C");
  } else if (80 >= grade && grade < 90) {
    console.log("Grade B");
  } else if (90 >= grade && grade <= 100) {
    console.log("Grade A");
  } else {
    console.log("Grade F");
  }
}


// 31.	Write a program that checks if a user-provided number is divisible by 4 and 6. Print appropriate messages if the number is divisible by only one, both, or neither.

function divisibleBy4and6(number) {
  if (number % 4 === 0 && number % 6 === 0) {
    console.log("The number is divisible by both 4 and 6");
  } else if (number % 6 === 0) {
    console.log("The number is divisible only by 6");
  } else if (number % 4 === 0) {
    console.log("The number is divisible only by 4");
  } else {
    console.log("The number is not divisible by both 4 and 6");
  }
}

// 32.	Write a program that takes an integer representing a month (1 for January, 2 for February, etc.) and prints the season ("Winter", "Spring", "Summer", "Autumn") for that month using a switch statement.

// Winter - Dec, Jan, Feb; Summer - March, April, May; Rainy - June, July, August, September; Autumn - October and November


function seasonOfMonth(monthNumber) {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
    console.log(month[monthNumber - 1], "is Winter season");
  } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    console.log(month[monthNumber - 1], "is Summer season");
  } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8 || monthNumber === 9) {
    console.log(month[monthNumber - 1], "is Rainy season");
  } else if (monthNumber === 10 || monthNumber === 11) {
    console.log(month[monthNumber - 1], "is Autumn season");
  }
}

// 33.	Write a program that prints the squares of the first 15 natural numbers using a for loop.

function squaresOf15Numbers() {
  for (let i = 1; i <= 15; i++) {
    console.log("Square of", i, "is", i * i);
  }
}

// 34.	Write a program that keeps asking the user for a password until the correct password "letmein" is entered. Once the correct password is entered, print "Access Granted."

function checkPassword(pwdStr) {
  if (pwdStr === "letmein") {
    console.log("Access Granted.");
  } else {
    console.log("Access denied");
  }
}

// 35.	Write a program that takes a number and prints all the prime numbers less than that number using a while loop.

function primeNumber(number) {
  let condition = 1;
  var result = [];
  if (0 >= number) {
    console.log("Enter number greater that 0");
  }
  while (condition < number) {
    if (number === 1 || number === 2 || number === 3) {
      for (let i = 1; i <= number; i++) {
        console.log(i);
      }
      break;
    }
    for (let i = 1; i < number; i++) {
      if (number % i !== 0) {
        result.push(i)
      }
    }
    condition++
  }
  console.log(result);
}


// 36.	Given an object {movie: "Inception", director: "Christopher Nolan", year: 2010}, write a program that uses a for-in loop to list all the properties and their values in the format "Property: Value".


function movieObjLoop() {
  let movie = { movie: "Inception", director: "Christopher Nolan", year: 2010 }
  for (const key in movie) {
    console.log(key, ":", movie[key]);
  }
}

// 37.	Write a program that checks if a user-provided string has a length greater than 5. If it does, print "The string is long.

function strLength(wordStr) {
  if (wordStr.length > 5) {
    console.log("The string is long.");
  }
}

// 38.	Write a program that checks if a given number is a multiple of 10. Print "Multiple of 10" if it is, otherwise print "Not a multiple of 10.

function multipleOfTen(number) {
  if (number % 10 === 0) {
    console.log("Multiple of 10");
  } else {
    console.log("Not a multiple of 10.");
  }
}

// 40.	Write a program that determines if a character entered by the user is a digit, an uppercase letter, or a lowercase letter. Use nested if statements to check these conditions.

// lower a = 97 and z = 122, upper A = 65 and Z = 90, digit 0 = 48 and 9 = 57

function typeOfData(value) {
  let enteredValueCharCode = value.charCodeAt(0);
  if (enteredValueCharCode >= 48 && enteredValueCharCode <= 57) {
    console.log("Its a digit");
  } else if (enteredValueCharCode >= 65 && enteredValueCharCode <= 90) {
    console.log("It's in UPPERCASE");
  } else if (enteredValueCharCode >= 97 && enteredValueCharCode <= 122) {
    console.log("It's in lowercase");
  }
}

// 41.	Write a program that takes a number from 1 to 5 and prints the corresponding word ("One" for 1, "Two" for 2, etc.) using a switch statement.

function numberToWord(number) {
  switch (number) {
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;

    default:
      console.log("Enter a number between 1 toi 5");
      break;
  }
}

// 42.	Write a program that calculates and prints the sum of the first 50 even numbers using a for loop.

function evenIn50() {
  for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// 43.	Write a program that asks the user to enter numbers until the sum of the entered numbers exceeds 100. Print the total sum once it exceeds 100 using a do-while loop.

function sumExceed100() {
  let summation = 0;
  while (summation < 100) {
    let randomNumber = (Math.floor(Math.random() * 10))
    summation += randomNumber
  }
  console.log(summation);
}

// 44.	Write a program that takes a number as input and prints the factorial of that number using a while loop.

function factorialInWhileLoop(number) {
  let factorialNumber = 1
  let i = 2;
  while (i <= number) {
    factorialNumber *= i;
    i++
  }
  console.log(factorialNumber);
}

// 45.	Given an object {make: "Toyota", model: "Corolla", year: 2021}, write a program that uses a for-in loop to print each property and its value in the format "Property: Value".

function printCarObj() {
  let carObj = { make: "Toyota", model: "Corolla", year: 2021 }
  for (const key in carObj) {
    console.log(key, ":", carObj[key]);
  }
}







// Q1
// isPositiveInteger(-1)

// Q2
// oddEven(3)

// Q3
// numberSign(1)

// Q4
// largeNumber(4,2,3)

// Q5
// gradeRemark("F`")

// Q6
// naturalNumber()

// Q7
// doWhileLoop();

// Q8
// multiplesOfFive()

// Q9
// objectIteration()

// Q10
// greaterThan100(101)

// Q11
// voterEligible(18)

// Q12
// temperature(26)

// Q13
// divisibleBy2and3(1)

// Q14
// dayOfTheWeek(9)

// Q15
// factorial(3)

// Q16
// guessTheNumber(21)

// Q17
// evenTillNumber(15)

// Q18
// forInLoop2()

// Q19
// isVowel("A")

// Q20
// isEmptyString("abcd")

// Q21
// isAge(12)

// Q22
// numberSign(0)

// Q23
// numberOfDaysInMonth(13)

// Q24
// fibonacciSeries(5)

// Q25
// guessTheNumber(12)

// Q26
// sunOfNumbers(5)

// Q27
// objectIteration27()

// Q28
// hasCharInString("john")

// Q29
// isLeapYear(2008)

// Q30
// grades(90)

// 31
// divisibleBy4and6(4)

// Q32
// seasonOfMonth(6)

// Q33
// squaresOf15Numbers()

// Q34
// checkPassword("letmein")

// Q35
// primeNumber(5)

// Q36
// movieObjLoop()

// Q37
// strLength("wordStr")

// Q38
// multipleOfTen(22)

// Q39
// typeOfData("1")

// Q40
// numberToWord(5)

// Q41
// evenIn50()

// Q42
// sumExceed100()

// Q43
// factorialInWhileLoop(3)

// Q44
// printCarObj()











