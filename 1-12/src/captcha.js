var fileStream = require("fs")

module.exports = (inputFile, addEquivalentNeighbors) => {
   return addEquivalentNeighbors(inputFile, (result) => {
        return result 
    })
}

function addEquivalentNeighbors(inputFile, done) {
    var result = []
    fileStream.readFile(inputFile, 'utf8', (err, file) => {
        if (err) { throw err }
        var numbers = file.split('')
        var result = []
        numbers.forEach((number, index) => {
            if (number == numbers[index + 1] || (numbers[index + 1] === undefined && number === numbers[0])) {
                return result.push(number)
            }
            return result.push(0)
        })
        //    return result.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
        done(result.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)))
    })
}