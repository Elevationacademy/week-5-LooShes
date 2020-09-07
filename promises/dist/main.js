// let p = $.get(`/randomWord`)
// console.log(p.state())

// p.then(function (word) {
//     console.log(word)
//     console.log(p.state())
// })

// $.get(`/sentiment/Ploy`).then(function(sentiment){
//     console.log(sentiment)
// })

// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

//ex1
// $.get('/randomWord')
//     .then(function(word){
//         console.log(word)
//         return $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=vUC2d9ZgAn5IwmZFv1oCydiqnppgClfN&limit=5`)

//     })
//     .then(function(data){
//         console.log(data)
//     })

//ex2
$.get('/randomWord')
    .then(function (word) {
        let books = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gifs = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=vUC2d9ZgAn5IwmZFv1oCydiqnppgClfN&limit=5`)
        Promise.all([books, gifs])
            .then(function (results) {
                console.log(results[0])
                console.log(results[1])
                $("body").append(`<div>${results[0].items[0].volumeInfo.title}</div>`)
                $("body").append(`<iframe src=${results[1].data[0].url}></iframe>`)
            })
    })