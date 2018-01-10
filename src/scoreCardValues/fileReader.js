const FS = require('fs')
const PATH_TO_SCORECARD = '/home/nikola/a4e/a4e.credissimo.tests/src/scoreCardValues/scoringCard.csv'

let result = []

module.exports = {
    import: function (callback, dataName) {
        FS.readFile(PATH_TO_SCORECARD, 'utf8', (err, data) => {
            if (err) throw err
            data.split('\n').filter(data => data.indexOf(dataName) > -1).forEach(function(element) {
                element.replace(dataName, '').trim().split(', ,')[0].split(';').forEach(function(e) {
                    if(e != '') {
                        result.push(e)
                    }
                })
            })
            callback(result)
            result = []
        })
    }
}

