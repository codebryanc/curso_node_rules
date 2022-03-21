const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.yellow} Buscar un lugar`
            },
            {
                value: 2,
                name: `${'2.'.yellow} Historial`
            },
            {
                value: 0,
                name: `${'3.'.yellow} Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log("=================================".green);
    console.log("      Seleccione una opción      ".white)
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

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, index) => {
        const idx = `${index + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
            type:'list',
            name: 'id',
            message: 'borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const listadoTareasPorCompletar = async(tareas = []) => {

    const choices = tareas.map((tarea, index) => {
        const idx = `${index + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`,
            checked: (tarea.completadoEn) ? true: false
        }
    });

    const pregunta = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

const confirmación = async (message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmación,
    listadoTareasPorCompletar
}