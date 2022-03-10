// No es mas que una funcion que se va a ejecutar despues, en cierto punto de tiempo.

// setTimeout(
//     function() {
//         console.log('Hola mundo');
//     },
//     1000
// );

const getUserById = (id, callback) => {
    const usuario = {
        // Esto es redundante
        //id: id
        id,
        nombre: 'Bryan Alejandro Cubillos Prieto'
    };

    setTimeout(() => {
        // console.log(usuario);
        callback(usuario);
    }, 1000);
}

getUserById(10, (user)=>{
    console.log(user.id);
    console.log(user.nombre.toUpperCase());
});