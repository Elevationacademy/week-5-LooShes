const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

const Person = require('../models/Person')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: false
}))

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    let person = req.body
    let p1 = new Person({
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age
    })

    p1.save()
    res.end()
})

router.put('/person/:id', function (req, res) {
    let personID = req.params.id

    Person.findById(personID, function (err, person) {
        person.age = 80 //how time flies
        person.save()
        res.send("OK")
    })
})

router.delete('/apocalypse', function (req, res) {
    let peoplePromise = Person.find({})
    peoplePromise.remove(function (err) {
            console.log(err) //"null" is ok
            res.end()
        })
    })


module.exports = router