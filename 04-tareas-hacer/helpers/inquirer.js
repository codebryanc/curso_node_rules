const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'Opción',
        message: '¿Qué desea hacer?',
        choices: [
            '1. Crear lista',
            'opt2',
            'opt3'
        ]
    }
];

const inquirerMenu = async() => {

    console.log("=================================".green);
    console.log("      Seleccione una opción      ".green)
    console.log("=================================\n".green);

    const opt = await inquirer.prompt(menuOptions);

    return opt;
}

module.exports = {
    inquirerMenu
}