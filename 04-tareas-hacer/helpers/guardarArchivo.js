const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) =>{
    fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
    if(fs.existsSync(archivo) === false){
        return null;
    }
    else{
        const info = fs.readFileSync(archivo, { encoding: 'utf-8' } );
        
        if(info) {
            return JSON.parse(info);
        }
        else {
            return null;
        }
    }
}

module.exports = {
    guardarDB,
    leerDB
}