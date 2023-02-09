var texto = prompt("Introduce un texto: ");

if (texto === texto.toUpperCase()) {
  console.log("El texto está formado sólo por mayúsculas");
} else if (texto === texto.toLowerCase()) {
  console.log("El texto está formado sólo por minúsculas");
} else {
  console.log("El texto está formado por una mezcla de mayúsculas y minúsculas");
}
