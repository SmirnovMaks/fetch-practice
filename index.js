const getData = () => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            sendData(data);
        })
        .catch(err => console.log(err));
};



const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(err => console.log(err));
};


getData();