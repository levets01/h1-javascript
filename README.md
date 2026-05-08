Verificador de Edad en JavaScript

Este proyecto es un programa sencillo en JavaScript que solicita el nombre y la edad del usuario mediante ventanas emergentes (prompt).
Luego valida si la edad ingresada es correcta y muestra un mensaje personalizado dependiendo de si el usuario es menor o mayor de edad.

📋 Características
Solicita el nombre del usuario.
Solicita la edad.
Convierte la edad a número.
Valida si la edad ingresada es válida.
Muestra mensajes diferentes para:
Menores de edad.
Mayores de edad.
Manejo básico de errores con console.error().
🚀 Tecnologías utilizadas
JavaScript
HTML (para ejecutar el script en el navegador)
📂 Estructura del proyecto
📁 proyecto
 ├── index.html
 └── script.js
💻 Código principal
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
▶️ Cómo ejecutar el proyecto
Crea un archivo llamado index.html.
Agrega la siguiente estructura:
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Edad</title>
</head>
<body>

    <script src="script.js"></script>

</body>
</html>
Guarda el código JavaScript en un archivo llamado script.js.
Abre index.html en tu navegador.
📌 Ejemplo de uso
Ingresa tu nombre: Carlos
Ingresa tu edad: 20

Resultado:

Hola Carlos, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!
📖 Aprendizajes

Con este proyecto se practican conceptos básicos de JavaScript como:

Variables (const)
Entrada de datos con prompt()
Conversión de tipos con Number()
Validación con isNaN()
Condicionales if/else
Uso de alert() y console.error()
👨‍💻 Autor

Proyecto realizado como práctica de JavaScript.
