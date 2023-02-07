let nota = parseFloat(prompt("Introduce una nota:"));

if (nota >= 0 && nota <= 2) {
  console.log("Muy deficiente");
} else if (nota <= 4) {
  console.log("Insuficiente");
} else if (nota <= 6) {
  console.log("Suficiente");
} else if (nota <= 7) {
  console.log("Bien");
} else if (nota <= 9) {
  console.log("Notable");
} else if (nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota inválida");
}
