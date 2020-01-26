const fs = require('fs')
let hello = fs.readFileSync("./replies/hello.txt").toString('utf-8');
let helloLine = hello.split("\n")
let rude = fs.readFileSync("./replies/rude.txt").toString('utf-8');
let rudeLine = rude.split("\n")
let itease = fs.readFileSync("./replies/incomingTease.txt").toString('utf-8');
let iteaseLine = itease.split("\n")
const replies = require('./replies')

const checkHello = (str) => {
    if (helloLine.indexOf(str) > 0) {
        return true
    }
}

const checkRude = (str) => {
    if (rudeLine.indexOf(str) > 0) {
        return true
    }
}

const checkITease = (str) => {
    if (iteaseLine.indexOf(str) > 0) {
        return true
    }
}

const checkSentiment = (str) => {
    if (checkHello(str)) {
        return {
            text: replies.genHello(),
            sentiment: 'hello'
        }
    } else if (checkITease(str)) {
        return {
            text: replies.genTease(),
            sentiment: 'tease'
        }
    } else if (checkRude(str)) {
        return {
            text: replies.genRude(),
            sentiment: 'rude'
        }
    } else {
        return {
            text: 'none',
            sentiment: 'unknown'
        }
    }
}

module.exports = {
    checkSentiment
}


