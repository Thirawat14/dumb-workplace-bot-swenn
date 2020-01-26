const express = require('express')
const bodyParser = require('body-parser')
const message = require('./message/message')
const replies = require('./replies/replies')
const sentiment = require('./replies/sentiment')
let app = express()
let port = (process.env.PORT || 3000)
app.use(bodyParser.json());

var unknown = 0;

app.get('/webhook',  (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'ThirawatThiravanitkul') {
        console.log('Validated');
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('Failed validation. The validation token do not match. Check the VERIFY TOKEN input.');
        res.status(403);
    }
});

app.post('/webhook', (req, res) => {
    let text = req.body.entry[0].messaging[0].message.text;
    let sender = req.body.entry[0].messaging[0].sender.id;
    var reply = '';

    if (sentiment.checkSentiment(text).sentiment == 'unknown') {
        if (unknown == 0 || unknown == 1) {
            reply = 'ไม่เข้าใจอะ';
        } else if (unknown == 2) {
            reply = 'ไม่เข้าใจจริงๆ'
        } else if (unknown == 3) {
            reply = 'ไม่เข้าใจโว๊ย'
        } else if (unknown == 4) {
            reply = 'พอยังอะเรา?'
        } else if (unknown == 5) {
            reply = 'ไม่คุยด้วยละ'
        } else {
            reply = '...';
            unknown = 0;
        }

        unknown += 1;

    } else {
        reply = sentiment.checkSentiment(text).text
    }

    message.sendMessage(sender, reply)

    res.sendStatus(200)
});

app.listen(port, () => console.log(`Thirawat app listening on port ${port}!`))






