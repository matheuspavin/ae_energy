const axios = require('axios');

function getURL(url) {
    axios.get(url)
        .then((response) => {
            console.log('Response:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
