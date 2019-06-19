//Part 1: Terms

//1. What is the difference between interpolation and concatenation? Give an example of each.
// interpolation for ceating tmplate strings. 
//example: const word = "hello" name = "michael"
			//console.log(word + name);
//concatenation allows to add strings together
//example: const adjective = 'sayHello'

//2. What does the acronym DRY stand for? 
//Don't Repeat Yourself
//Why should we pay attention to it?
// you can save your time to do the same work.
//What programming tools have we learned to write DRY code
//loops and functions

//3. What is the difference between declaring a variable and assigning a value to a variable? 
// declaring a variabl is like give the variabel a identity,
// assinging is giving the varibale a value or name or something else.
//What do we mean when we say "define" a variable?
//to recognize the variable type.

//4. When should we use const and when should we use let?
// const is immutabel; once you define a variable as const you cant reassinge it 
// let is mutable; you can reassing it to another value.

//5. Unix question: What is a "parent" directory?
//it contains all the sub-directories and files.

//6. Unix, again: If you're not sure about how to use a Unix command, 
//how can you get more info without being connected to the internet?
//man + keyword

//7. What is "tab completion" and why is it aweseome?
// It automaticly pop up the default setings or directories' name.

//Part 2: Boolean expressions and operators

  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';
// 1. a < b
// 2. c > d
// 3. 'Name' === 'Name'
// 4. a != b != c
// 5. a === a != d
// 6. e === 'Kevin'
// 7. 48 == '48'

//Part 3: While loops

//1. infinite loop; true is a true boolean, 
//the while loop will keep running when it is true.

//2. infinte loop. 
//the variable runProgram is defined as const and assinged as true;

//3. Without running this loop, what is the expected output?
//A(line 1)
//AA(line 2)
//20 of 'A' (line 20)

//assign "A" to varible letters; 
let letters = "A";
//assign value 0 to varible i; 
let i = 0;

//the loop will repeat when i is less than 20 
while (i < 20) {
	//console.log(letters);
//varible letters increment one 'A' each time the loop running
	letters += "A";
//i = i + 1 increment by 1;
	i++;
}

//display the total number of 'A' in console 
console.log(letters); 

//AAAAAAAAAAAAAAAAAAAAA
//The console command is out side the loop, so in console it display the 'A' all at once
// there are total of 21 'A's in one line.
//1(the defined varibale) + 20(in the while loop)

//Part 4: Loops!

//1. for loops
//Both for loops and while loops repeat code. 
//But what are the differences? What are the similarities?
//while loop has one condition.
//for loop three locally condition.

//2. Write a for loop that will console.log() the numbers 0 to 999.

for (let i = 0; i < 1000; i++) {
	console.log(`the number: ${i}`);
}

//3.  The mechanics of a for loop
//What are the three components of the control statement?
// The first part of the control statement is: let i = 0; assign value 0 to variable i
// The second part of the control statement is: i < 100; when i is less than 100, the loop oprate
// The third part of the control statement is: i++; i = i +1. value of i icrement by 1 each time.

//4. for loop in reverse
//Using a postfix operator i-- instead of i++, 
//write a for loop that iterates in reverse: console.log() a countdown from 999 to 0.

for (let i = 999; i >= 0; i--) {
	console.log(`${i}`);
}

let total = 10;

for (let i = 1; i <= total; i++) {
	console.log(`The value of i is ${i} of ${total}`);
}













