let emailValido = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

let MayorA35 = /^.{1,35}$/;

let unNumero = /^(?=.*\d).+$/;

let de6A10 = /^.{6,10}$/;



const validation =  (userData) => {
    let errors  = {};

    if(!userData.email){
        errors.email = 'se requiere un email';
    }

    if(!emailValido.test(userData.email)){
        errors.email = 'Deber ser un email valido'
    }

    if(!MayorA35.test(userData.email)){
        errors.email = 'Debes tener menos de 35 caracteres'
    }

    if(!userData.password){
        errors.password = 'se requiere una contraseña'
    }

    if(!unNumero.test(userData.password)){
        errors.password = 'La contraseña debe tener almenos un numero'
    }

    if(!de6A10.test(userData.password)){
        errors.password = 'La contraseña debe ser entre 6 a 10 caracteres'
    }

    return errors;

}

export default validation;