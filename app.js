let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero secreto en ${intentos} ${(intentos===1) ? "vez"  : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento("p","El número secreto es menor");
            } else{
                asignarTextoElemento("p","El número secreto es mayor");
            }
            intentos++;
            limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sorteraron todos los numeros posibles");
    
    }else{
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroAleatorio();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

        }
    }
} 
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");    
}
condicionesIniciales();