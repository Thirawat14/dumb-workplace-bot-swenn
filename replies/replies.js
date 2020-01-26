const fs = require('fs')

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const genTease = () => {
    let tease = fs.readFileSync("./replies/tease.txt").toString('utf-8');
    let teaseLine = tease.split("\n")
    rand = getRandomInt(0, teaseLine.length)
    return teaseLine[rand]
}

const genRude = () => {
    let rudeLine = ['หยาบคายอ่ะ', 'รับไม่ได้', 'ว๊่ายทุเรศ', 'หยาบบบบบ', 'พูดจาอัปมงคล', 'ใครสั่งใครสอนมา', 'พ่อแม่ไม่สั่งสอนนะเรา', 'เถื่อนจริงๆ']
    rand = getRandomInt(0, rudeLine.length)
    return rudeLine[rand]
}

const genHello = () => {
    let hello = fs.readFileSync("./replies/hello.txt").toString('utf-8');
    let helloLine = hello.split("\n")
    rand = getRandomInt(0, helloLine.length)
    return helloLine[rand]
}

module.exports = {
    genTease,
    genRude,
    genHello
}


