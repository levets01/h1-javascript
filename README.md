# 🚀 Verificador de Edad en JavaScript

Este proyecto es una práctica básica en JavaScript que solicita el nombre y la edad del usuario mediante ventanas emergentes (`prompt`).  
El programa valida si la edad ingresada es correcta y muestra un mensaje diferente dependiendo de si el usuario es menor o mayor de edad.

---

## 📋 Características

✅ Solicita el nombre del usuario  
✅ Solicita la edad  
✅ Convierte texto a número usando `Number()`  
✅ Valida datos con `isNaN()`  
✅ Muestra mensajes personalizados  
✅ Manejo básico de errores con `console.error()`

---

## 🛠️ Tecnologías utilizadas

- JavaScript


---



## 💻 Código JavaScript

```javascript
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
```

---

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Abre la carpeta del proyecto.

3. Ejecuta el archivo `index.html` en tu navegador.


Chrome	  Ctrl + Shift + J
Edge	  Ctrl + Shift + J
Firefox	  Ctrl + Shift + K 
`

4.Copia el codigo y pagalo en la consola y presiona enter

---

## 📌 Ejemplo de uso

### Entrada:

```bash
Nombre: Ana
Edad: 17
```

### Resultado:

```bash
Hola Ana, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!
```

---

## 📚 Conceptos aprendidos

- Variables en JavaScript
- Uso de `prompt()`
- Conversión de datos con `Number()`
- Validaciones con `isNaN()`
- Condicionales `if / else`
- Uso de `alert()` y `console.error()`

---

## 👨‍💻 Autor

Proyecto realizado como práctica de JavaScrip por Stevel Iglesias.
