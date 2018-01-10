const FS = require('fs')
const REQUESTIFY = require('requestify')
const PATH_TO_DATA_FILE = '/home/nikola/a4e/a4e.credissimo.tests/src/generateData/result.txt'
const URL_ADDRESS = 'https://local.a4everyone.com/api/app-mgmt/v1.0/calculateScore/'

FS.readFile(PATH_TO_DATA_FILE, 'utf8', (err, data) => {
    if (err) throw err
    let jsonArray = JSON.parse(data)
    
    function createPostMethodsReqursivelly(count) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        REQUESTIFY.post(URL_ADDRESS, jsonArray[count]['request']) 
        .then(function(response) {
            let responseScore = JSON.parse(response.body)[0].scoreSC
            let expectedScore = JSON.parse(jsonArray[count].response)[0].scoreSC
            if (responseScore !== expectedScore) {
                console.log("WARNINIG different scores: expectedScore: " + expectedScore + " responseScore: " + responseScore)
            }
                
            if(count < jsonArray.length - 1) {
                createPostMethodsReqursivelly(++count)
            } else {
                console.log("All jsons requested!")
            }
        }).fail(function(response) {
            console.log(response)
        })
    }
    
    let counter = 0
    console.log("Starting execution of " + jsonArray.length + " requests. Please wait for response.")
    createPostMethodsReqursivelly(counter)
})