// js myfunction
funtion myFunction(){
  console.log (7);
}
myFunction()

// loop that passed an anonymous myFunction
myArray = {"a", "b", "c"}
myArray.map(function(name){
  return name.toUpperCase()
})

// loop that uses a fat arrow myFunction
  myNumbers = [2, 4, 6]
  myNumbers.map(num => num * 2)

// named fat arrow function that is called
let upCase = (name,i) => name + i
let arr = ["js", "ruby", "python"]
let newArr = arr.forEach(upCase)


// js class with constructor
class Ropa {
  constructor(){
    super()
  }
}
class Sombrero extends Ropa{}
let pansts = new Ropa()

// js class that inherits from the previous js class
class Ropa {
  constructor(){
    console.log("ropa")
  }
}
class Sombrero extends Ropa{
  constructor(){
    super()
    console.log("sombrero")
  }
}
let hat = new sombrero()
let pants = new Ropa()
}


//create a js Object
{}
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//create an array of objects
[{},{}]


//make an arrray of objects that represents students in the bootcamp

let students = [{name: "Javier", age: 40], Patrick: 34, Paula: 17, Gustavo: 31}]

//use forEach loop to print their names

students.forEach(function(student){
  console.log(student.name)

});

// arrow
students.forEach((student =>
console.log(student.name)

// use map to make an array of their ages
let ages = students.map( student =>student.age)
console.log(ages)
// calculate the average age
let sum = ages.reduce(
  total, age) => total + age
)

let avg = sum / ages.length
console.log (avg)


///
const sample = (arr) => (
  arr[Math.floor(Math.random() * arr.length)]
)


let students = [{name: "Javier", age: 40}, {name: "Pedro", age: 25}, {name: "Juan", age: 36}, {name: "Estefan", age: 22}, {name: "Carlos", age: 27}, {name: "Diego", age: 29}],

function group (arr, num){
  let newArr =[]

  for(let counter = 0; counter < num; counter ++){
    newArr.push(sample(newArr))
  }
  return newArr
}
group(students, 3)

//
