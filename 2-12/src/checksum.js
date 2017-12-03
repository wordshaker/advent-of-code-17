var fileStream = require("fs")

var file = fileStream.readFile(process.argv[2], 'utf8', (err, file) => {
    fileStream.readFile(process.argv[2], 'utf8', (err, file) => {
        var inputs = file.split('\n')
        var checksumValues = []
        
        inputs.forEach((row => {
            var splitRow = row.split('\t')
            var diff =  Math.max.apply(null, splitRow) - Math.min.apply(null, splitRow)
            checksumValues.push(diff)
        }))
        return checksumValues.reduce((a, b) => a + b, 0)
    })
})