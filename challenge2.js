/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log( `Hello ${name}`)
}
greet("fatemah")
greet("salwa")


/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n %2 == 1 ){
    console.log("true")
  }
  else {
    console.log("flase")
  }
  
}
isOdd(11)
isOdd(20)

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  console.log((n-1) /2)
}
oddsSmallerThan(7)
oddsSmallerThan(15)
  


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd n*n
 * - returns its double if it's even 
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd) {
    console.log(n*2)
  }
  else {
    console.log(n*n)
  }
}
squareOrDouble(16)
squareOrDouble(9)