
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



const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch( err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch( err => console.log(err));

// getEmpleado(id)
//     .then(nombre => {
//         getSalario(id)
//             .then(salario => {
//                 console.log('El empleado:', nombre, 'tiene un salario:', salario);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));


// Pomesas en cadena

let nombre = '';

getEmpleado(id)
    .then( nombreEmpleado => {
            nombre = nombreEmpleado;
            return getSalario(id)
    })
    .then( salario => console.log('El empleado:', nombre, 'tiene el salario', salario))
    .catch(err => console.log(err));