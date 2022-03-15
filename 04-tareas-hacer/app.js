
require('colors');

const { inquirerMenu } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    console.log(`hola Mundo`);

    let opt = '';

    do {

        // Do while
        opt = await inquirerMenu();

        console.log(`${opt}`);

    } while(opt != '0');
}

main();