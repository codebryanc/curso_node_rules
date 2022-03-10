const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    default: false,
                    type: 'boolean',
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    default: 10,
                    type: 'number',
                    describe: 'Define el número máximo a multiplicar'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base debe ser un número';
                    }

                    // Si todo funciona y no hay error
                    return true;
                })
                .argv;

module.exports = {
    argv
}