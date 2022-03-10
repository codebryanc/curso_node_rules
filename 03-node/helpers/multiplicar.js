const fs = require('fs');

const colors = require('colors');

const crearArchivo = async(tablaDeMultiplicar = 5, listar, hasta) => {

    try {

        // Task clg tabla del 5 en la consola

        // DONE:

        // [1,2,3,4,5,6,7,8,9,10].forEach(element => {
        //     console.log(`5 x ${element} = ${element * 5}`);
        // });

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            salida += `\n ${tablaDeMultiplicar} x ${i} = ${tablaDeMultiplicar * i}`;
            if(i === hasta) {
                salida += '\n';
            }

            consola += `\n ${tablaDeMultiplicar} ${colors.green('x')} ${i} = ${tablaDeMultiplicar * i}`;
            if(i === hasta) {
                consola += '\n';
            }
        }
        
        if(listar) {
            console.log('===================='.green);
            console.log(colors.yellow(`   Tabla del:`), colors.green(tablaDeMultiplicar));
            console.log('===================='.green);
            console.log(consola);
        }
        
        // fs.writeFile(`tabla-${tablaDeMultiplicar}.txt`, salida, (err) => {
        //     if(err) {
        //         throw err;
        //     }
        
        //     console.log(`Tabla ${tablaDeMultiplicar} creado`);
        // });
        

        // La gran diferencia es que esto no hace catch de los errores.
        fs.writeFileSync(`./salida/tabla-${tablaDeMultiplicar}.txt`, salida);
        
        return(`TABLA-${tablaDeMultiplicar}.txt`);
    }
    catch (err) {
        throw err;
    }
}

module.exports =  {
    crearArchivo
}