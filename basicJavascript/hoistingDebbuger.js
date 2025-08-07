console.log(firstName) // John Doe
var firstName = 'John Doe'

/**
 * INFO: MEMEROY TECHNIQUE
 * imagine you are getting dressed. You try to wear pants before you put them on.
 * You can see the pants, but you can't wear them until you put them on.
 * This is similar to how JavaScript hoists variable declarations.
 * The variable is declared at the top of the scope, but its value is not assigned until
 * the line where it is defined.
 * This is why you see 'undefined' when you try to access it before the assignment.
 * This is called "hoisting".
 **/

//JS engine transforms the code like this:

// var firstName; // Declaration is hoisted to the top of the scope
// console.log(firstName); // undefined, because the assignment hasn't happened yet
// firstName = 'John Doe'; // Assignment happens here

// VISUAL EXAMPLE 2: let and const;

console.log(city) // ReferenceError: Cannot access 'city' before initialization
let city = 'New York'

// JS hoists let, but keeps it in temporary dead zone until the declaration is reached

// 🌟╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌🌟
//  ⎸ Hoisting debbuger ⎹
// 🌟╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌🌟

function hoistingDebugger() {
  console.log('Var example:')
  console.log(varA) // This will log 'undefined' because varA is hoisted but not yet assigned
  var varA = 'I am a variable declared with var'
  console.log(varA) // This will log 'I am a variable declared with var'

  console.log('Let example:')
  try {
    console.log(letB) // This will throw a ReferenceError because letB is in the temporal dead zone
    let letB = 'I am a variable declared with let'
  } catch (error) {
    console.error('Error:', error.message) // This will log the ReferenceError message
  }

  console.log('Const example:')
  try {
    console.log(constC) // This will throw a ReferenceError because constC is in the temporal dead zone
    const constC = 'I am a variable declared with const'
  } catch (error) {
    console.error('Error:', error.message) // This will log the ReferenceError message
  }

  console.log('Function example:')
  console.log(myFunction()) // This will log 'I am a function declared with function declaration
  function myFunction() {
    return 'I am a function declared with function declaration'
  }

  console.log('Arrow function example:')
  try {
    console.log(myArrowFunction()) // This will throw a ReferenceError because myArrowFunction is not hoisted
    const myArrowFunction = () => 'I am an arrow function declared with const'
  } catch (error) {
    console.error('Error:', error.message) // This will log the Reference
  }

  console.log('Class example:')
  try {
    console.log(new MyClass()) // This will throw a ReferenceError because MyClass is not hoisted
    class MyClass {
      constructor() {
        this.message = 'I am a class declared with class declaration'
      }
    }
  } catch (error) {
    console.error('Error:', error.message) // This will log the ReferenceError message
  }
}

hoistingDebugger()
