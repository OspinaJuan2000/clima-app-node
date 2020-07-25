const axios = require('axios').default


const getInfo = async (city) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a085a370fd44616f1e92b81d46217fe4&units=metric`);
        
        return `La temperatura en ${city} es de: ${response.data.main.temp}`;
    } catch(e) {
        return `No se pudó encontrar información del clima en la ciudad ${city}`;
    }
}

module.exports = {
    getInfo
}