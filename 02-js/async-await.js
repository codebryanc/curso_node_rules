
const empleados = [
    {
        id: 1,
        nombre: 'Bryan C'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Carol'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const nombreEmpleado = empleados.find(e => e.id === id)?.nombre;
        
        (nombreEmpleado)
            ? resolve(nombreEmpleado)
            : reject(`Empleado con id ${id} no existe.`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`Salario para el id ${id} no existe`);
    })
}


// await espera, debe estar dentro de una funcion o metodo async

// Async nos transforma esto en una promesa

const getInfoUser = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;}
    catch (err) {
        
        // Esto llama el reject de la funcion async en consecuencia llega al catch del llamado en el callbak papa
        throw err;
    }
};



const id = 3;

getInfoUser(id)
    .then( msg => {
        console.log('Todo cool!');
        console.log(msg)
    })
    .catch ( err => {
        console.log('Todo mal!');
        console.log(err);
    });

