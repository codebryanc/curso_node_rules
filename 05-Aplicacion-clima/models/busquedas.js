class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogotá'];

    constructor() {
        // TODO: Leer DB si existe
    }

    async ciudad(lugar = '') {
        
        // Petición HTTP
        console.log(`${lugar}`);

        return []; // regresar => Ciudades que conicidan con los lugares de la persona
    }
}

module.exports = Busquedas