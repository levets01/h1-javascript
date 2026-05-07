const nombre = prompt("Ingresa tu nombre:");

// Solicitar la edad del usuario
const edadIngresada = prompt("Ingresa tu edad:");

// Convertir la edad a número
const edad = Number(edadIngresada);


if (isNaN(edad)) {


    console.error("Error: Por favor, ingresa una edad válida en números.");

} else {

    // Verificar si el usuario es menor de edad
    if (edad < 18) {

        // Mensaje para menores de edad
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);

    } else {

        // Mensaje para mayores de edad
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);

    }
}
