const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solar', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log('DB Connected!'))

const Schema = mongoose.Schema

const solarSystemSchema = new Schema({
    planets: [{
        type: Schema.Types.ObjectId,
        ref: 'planets'
    }],
    starName: String,
})

const planetSchema = new Schema({
    name: String,
    system: {
        type: Schema.Types.ObjectId,
        ref: 'solarSystem'
    },
    visitors: [{
        type: Schema.Types.ObjectId,
        ref: 'visitors'
    }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: {
        type: Schema.Types.ObjectId,
        ref: 'planets'
    },
    visitedPlanets: [{
        type: Schema.Types.ObjectId,
        ref: 'planets'
    }]
})

const SolarSystem = mongoose.model('solarSystem', solarSystemSchema)
const Planet = mongoose.model('planets', planetSchema)
const Visitor = mongoose.model('visitors', visitorSchema)

let ss1 = new SolarSystem({
    planets: [],
    starName: 'Alpha Centauri',
})

let ss2 = new SolarSystem({
    planets: [],
    starName: 'Sun',
})

let p1 = new Planet({
    name: 'Proxima Centauri b',
    system: ss1,


    
    visitors: []
})

let p2 = new Planet({
    name: 'Proxima Centauri c',
    system: ss1,
    visitors: []
})

let p3 = new Planet({
    name: 'Venus',
    system: ss2,
    visitors: []
})

let v1 = new Visitor({
    name: 'noizyGirl',
    homePlanet: p2,
    visitedPlanets: []
})

let v2 = new Visitor({
    name: 'rainyGirl',
    homePlanet: p3,
    visitedPlanets: []
})

let v3 = new Visitor({
    name: 'sleepyBoy',
    homePlanet: p1,
    visitedPlanets: []
})

// ss1.planets.push(p1)
// ss1.planets.push(p2)
// ss2.planets.push(p3)

// p1.visitors.push(v1)
// p2.visitors.push(v2)
// p3.visitors.push(v3)
// p3.visitors.push(v1)

// v1.visitedPlanets.push(p1)
// v1.visitedPlanets.push(p3)
// v2.visitedPlanets.push(p2)
// v3.visitedPlanets.push(p3)

// ss1.save()
// ss2.save()
// p1.save()
// p2.save()
// p3.save()
// v1.save()
// v2.save()
// v3.save()

// Visitor.findOne({})
//        .populate({
//            path: 'visitedPlanets',
//            populate: {
//                 path: 'visitors'
//         }
//     })
//         .exec(function (err, visitor) {
//             console.log(visitor.name)
//     })

// Planet.findOne({name: 'Venus'}).populate('visitors').exec(function(err, planet){
//     planet.visitors.forEach(element => {
//         console.log(element.name)
//     })
// })

// SolarSystem.findOne({})
//     .populate({
//         path: 'planets',
//         populate: {
//             path: 'visitors'
//         }
//     })
//     .exec(function (err, system) {
//         for(planet of system.planets){
//             planet.visitors.forEach(visitor => console.log(visitor.name))
//         }
//     })

Visitor.findOne({}).populate({
    path: "homePlanet",
    populate: {
        path: "system",
    }
}).exec(function(err, visitor) {
    console.log(visitor.homePlanet.system.starName)
})