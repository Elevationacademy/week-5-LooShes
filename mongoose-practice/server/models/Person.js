const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

//Crud
const Person = mongoose.model("person", personSchema)
module.exports = Person

// //cRud
// Person.find({}, function (err, people) {
//   console.log(people)
// })

// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// //crUd
// Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
//   person.age += 10 //how time flies
//   person.save()
// })

// Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, function (err, person) {
//   console.log(person)
// })

// //cruD
// Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
//   person.remove(function (err) {
//       console.log(err) //usually this will be `null`, unless something went wrong
//   })
// })


