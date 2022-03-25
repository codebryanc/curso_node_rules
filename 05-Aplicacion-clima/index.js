const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let option;

    do {

        option = await inquirerMenu();
        
        switch(option) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('¿Cual ciudad requiere buscar?');
                console.log(`${lugar}`);

                // Buscar los lugares


                
                // Seleccionar el lugar
                console.log(`\n Información del lugar \n`);
                console.log(`Ciudad: `);
                console.log(`Longitud: `);
                console.log(`Latitud: `);
                console.log(`Temperatura: `);
                console.log(`Mínima: `);
                console.log(`Máxima: `);
                
            break;
            case 2:
            
            break;
        }

        
        if(option != 0) {
            await pausa();
        }
        
    } while (option != 0);
}

main();
