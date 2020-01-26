const axios = require('axios');

botAuth = 'DQVJzeloyR2JuSjdZAbnlpMFUyRGpXdUxGenpiWjZALTXJCclpJUmxrNDhraFF0WEpmVlREZAUJWNlh0bndZAVzNjNUxFWkZAPdS04WjU3dHdweFZAtM2lCUTVFLXE1WDNTWlU2MjlCdXBMSmpEQVM5dmVkZAWJNMzNIbHZA0TzFpX3NpZAzVQYjZAEaGZAuNXd1bm5CakpyWHd3NnZARNGs1ZAF9PN1NseGZAlU2Ezd0wyRC1xSnFhTVVudlY5LV84Ul9IVGdLR0ZAuc3g3SDJ3'

const workplacePost = axios.create({
    method: 'POST',
    baseURL: 'https://graph.facebook.com/me/messages',
    headers: {
    Authorization: `Bearer ${botAuth}`
    }
});

const sendMessage = (id, message) => {
    workplacePost({
        data: {
            recipient: {
                id: id
            },
            message: {
                text: message
            }
        }
    })
    .then((response) => {
        console.log(`The message was sent successfully with the server response ${response.data}`)
    }, (err) => {
        console.log(`The message failed to send with the following error: ${err}`)
    });
};

module.exports = {
    sendMessage,
}

