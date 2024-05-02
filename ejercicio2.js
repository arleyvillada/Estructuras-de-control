const num1 = parseInt(prompt("ingresar primer numero"));
const num2 = parseInt(prompt("ingrsa segundo numero"));
const operacion = prompt(" que operacion desea realizar ");

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicion = num1 * num2;
const division = num1 / num2;

if (operacion === "suma") {
  console.log("la suma entre numero1 y numero2 es: ", suma);
}

if (operacion === "resta") {
  console.log("la resta entre numero1 y nuero2 es: ", resta);
}
if (operacion === "multiplicacion") {
  console.log("la multiplicacion entre numero1 y numero2 es: ", multiplicion);
}
if (operacion === "divicion") {
  console.log("la divicion entre numero1 y numero2 es: ", division);
} else {
  console.log("error");
}
