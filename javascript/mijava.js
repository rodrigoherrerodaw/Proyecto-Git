window.addEventListener("load", (event) => {
    alert("Hola mundo");
    console.log("Hola mundo");
  });

// Mensaje de bienvenida dinámico
document.addEventListener("DOMContentLoaded", function () {
  let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
  
  if (nombre) {
      document.body.innerHTML += `<h2>Bienvenido, ${nombre} 👋</h2>`;
      console.log(`Usuario: ${nombre} ha ingresado al sitio.`);
  } else {
      document.body.innerHTML += `<h2>Bienvenido, visitante 👋</h2>`;
      console.log("Un usuario anónimo ha ingresado.");
  }
});

 