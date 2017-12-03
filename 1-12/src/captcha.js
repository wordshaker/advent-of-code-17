var fileStream = require("fs")

    var result = []
    fileStream.readFile(process.argv[2], 'utf8', (err, file) => {
        if (err) { throw err }
        var numbers = file.split('')
        var result = []
        numbers.forEach((number, index) => {
            if (number == numbers[index + 1] || (numbers[index + 1] === undefined && number === numbers[0])) {
                return result.push(number)
            }
            return result.push(0)
        })
        console.log(result.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)))
    })