'use strict';

const getData = (send) => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            send(data)
        })
        .catch(error => {
            console.log(error.message)
        })
}

const sendData = (mess) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
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
        console.log(error.message);
    })
}

getData(sendData)