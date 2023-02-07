/* Console object methods

we use console object methods to show output on the browser document . both  method is user only for testing and debugging purposes. The console method is the most popular testing and debugging tool on the browser. we use document.getElementNyId() when we like to interact with 
DOM in the another section


*/
/*
console.log()

We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.

Showing output on browser console
*/
console.log('30 Days of JavaScript')
// 30 Days of JavaScript
// Substitution
console.log('%d %s of JavaScript', 30, 'Days')
// 30 Days of JavaScript
// CSS
// We can style logging message using css. Copy the following code and paste it on browser console to see the result.

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

// ================================================

// ==========console.warn()=========
// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices. Copy the following code and paste it on browser console to see warning messages.

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)

// console.error()
console.error('This is an error message')

// console.table()
// The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)



//   console.time()
// Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')







//   console.info()
// It displays information message on browser console.

console.info('30 Days Of JavaScript challenge is trending on Github')


// console.assert()
// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}








// console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

const Names = ['Asabeneh', 'Brook', 'David', 'John']
const Countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const User = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(Names)
console.groupEnd()

console.group('Countries')
console.log(
    Countries)
console.groupEnd()

console.group('Users')
console.log(User)
console.log(users)
console.groupEnd()



// console.clear()
console.clear() //cleans the browser console.