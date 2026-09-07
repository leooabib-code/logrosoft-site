const https = require('https');

const fetchImage = (url) => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
};

fetchImage('https://maquinasdesorvetes.com.br/lsd-d300.png');
fetchImage('https://maquinasdesorvetes.com.br/lsd-d300.webp');
fetchImage('https://maquinasdesorvetes.com.br/assets/lsd-d300.png');
fetchImage('https://maquinasdesorvetes.com.br/assets/lsd-d300.webp');
