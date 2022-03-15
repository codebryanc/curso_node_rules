
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log(`hola Mundo`);

    let opt = '';

    do {

        // Do while
        opt = await inquirerMenu();

        console.log(opt);

        if(opt != '0') {
            await pausa();
        }

    } while(opt != '0');
}

main();