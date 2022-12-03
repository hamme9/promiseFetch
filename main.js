'use strict';

const getData = (send) => {
    fetch('db.json')
        .then(data => {
            send(data)
        })
        .catch(error => {
            console.log(error)
        })
}

const sendData = (mess, url, method = 'GET') => {
    return fetch(url, {
    method: method,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(mess)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

const sendReady = sendData(getData,'https://jsonplaceholder.typicode.com/posts', 'POST')

getData(sendReady)