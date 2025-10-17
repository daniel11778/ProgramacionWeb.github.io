

function sumar (a, b){
    return a+b;
}

function restar (a, b){
    return a-b;
}

function multiplicar (a, b){
    return a*b;
}

function dividir (a, b){
    if(b===0){
        alert("No se puede dividir entre 0");
       return;
    }
    return a/b;}

let a = parseInt(prompt("Ingrese el primer numero"));
let b = parseInt(prompt("Ingrese el segundo numero"));
let opc = parseInt(prompt("suma(1) resta(2) division(3) multiplicacion(4)"));

switch(opc){
    case 1:
        alert("Resultado: " + sumar(a,b));
        break;
    case 2:
        alert("Resultado: " + restar(a,b));
        break;
    case 3:
        alert("Resultado: " + dividir(a,b));
        break;
    case 4:
        alert("Resultado: " + multiplicar(a,b));
        break;
    default:
        alert("operacion no valida")
        break;
}