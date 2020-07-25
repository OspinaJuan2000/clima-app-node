const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');
const cityEncoded = encodeURI(argv.direccion);


clima.getInfo(cityEncoded)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));