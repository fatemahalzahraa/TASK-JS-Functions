
function printName(){
    console.log("Fatemah")
}
printName()

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(num1,num2){
    return (num1-num2)

}
let age = printAge(2024,1999)
console.log(age)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name,language){ 
  if (language == "en"){

    console.log(`Hello ${name}`)

  }

  else if (language == "es"){

    console.log(`Hola ${name}`)
  }

  else if (language == "fr"){

    console.log(`Bonjour ${name}`)
  }

  else (language == "tr");{
    
    console.log(`Merhaba ${name}`)
  }

}
printHello("fatema","en")


/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1,num2){

    if (num1>num2){
        console.log(num1)
    }

    else if (num2>num1){
        console.log(num2)
    }


}
printMax(20,90)
printMax(100,99)