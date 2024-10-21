function calcularFactorial(n) {
    var resultado = 1; // Empezamos con 1 porque el factorial de 0 y 1 es 1
    for (var i = 2; i <= n; i++) { 
        resultado *= i; 
    }
    return resultado; 
}

function solicitarNumero() {
    var numero; // Declaramos la variable

    while (true) {
        numero = prompt("Por favor, ingresa un número:"); 
        if (numero === null) return; 

        numero = parseInt(numero); 

        if (!isNaN(numero) && numero >= 0) { 
            break;
        } else {
            alert("Error: Por favor, ingresa un número válido."); 
        }
    }

    return numero; 
}

var numero = solicitarNumero();
if (numero !== null) { 
    var resultado = calcularFactorial(numero); 
    console.log("El factorial de " + numero + " es: " + resultado); //en cosnsola
    document.getElementById("result").innerText = "El factorial de " + numero + " es: " + resultado; //para el DOM
}
