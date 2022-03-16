const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar una tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log("=================================".green);
    console.log("      Seleccione una opción      ".green)
    console.log("=================================\n".green);

    // Por que el name es opcion en el => name: 'Opción'
    const { opcion } = await inquirer.prompt(menuOptions);

    return opcion;
}

const pausa = async() => {

    const questionPausa = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    console.log(`\n`);
    
    const {pausa} = await inquirer.prompt(questionPausa);

    return pausa;
}

const leerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'questionName',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    console.log(`\n`);
    
    const {questionName} = await inquirer.prompt(question);

    return questionName;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}