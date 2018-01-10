const express = require('express')
const requestify = require('requestify')
const data = require('./data')

const normalHours = 22
const rushHourHours = 2
const numberOfRequestsPerDay = 1000 
const rushHourPercentage = 25
const numberOfRushHourRequests = rushHourPercentage / 100 * numberOfRequestsPerDay
const numberOfNormalRequests = numberOfRequestsPerDay - numberOfRushHourRequests
const normalInterval = (normalHours * 60 * 60 * 1000) / numberOfNormalRequests 
const rushHourInterval = (rushHourHours * 60 * 60 * 1000) / numberOfRushHourRequests

let counterOfRequsts = 0

function myTimeoutFunction(){

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    requestify.post('https://stage1.a4everyone.com/api/app-mgmt/v1.0/calculateScore', data)
    .then(function(response) {
        console.log( new Date().toLocaleString() + ' ' + response.getBody())
    }).fail(function(response) {
        console.log(response)
    })

    counterOfRequsts++ 
    if(counterOfRequsts < numberOfNormalRequests) { // make normal request
        setTimeout(function() {
            myTimeoutFunction()
        }, normalInterval)
    } else if(counterOfRequsts < numberOfRequestsPerDay) { // make rush hour request
        setTimeout(function() {
            myTimeoutFunction()
        }, rushHourInterval)
    } else { // 24 hours passed restart the counter
        counterOfRequsts = 0
        myTimeoutFunction()
    }
}

myTimeoutFunction()