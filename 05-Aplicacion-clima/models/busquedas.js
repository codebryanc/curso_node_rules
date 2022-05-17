const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogotá'];

    constructor() {
        // TODO: Leer DB si existe
    }

    async ciudad(lugar = '') {

        try {
            // Petición HTTP
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiYWxlamJpayIsImEiOiJjbDM5b3Q2bW8wMDJpM2Jsa3ZsODJ3bG90In0.KvsN7HcVxOjfj-BUNbh2eQ');
            console.log(resp.data);
            
            return [];
        }
        catch (error) {
            console.log(`No se encontro nada, Error: `, error);
            
            return [];
        }

        return []; // regresar => Ciudades que conicidan con los lugares de la persona
    }
}

module.exports = Busquedas