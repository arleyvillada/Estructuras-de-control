let sumaEdades = 0;

for (let i = 1; i <= 5; i++) {
  let edad = parseInt(prompt("ingresar edad" + i + ":"));
  sumaEdades += edad;
}

let promedioEdades = sumaEdades / 5;
console.log("la edad promedio es", promedioEdades);

if (promedioEdades >= 18) {
  console.log(
    "la edad promedio es mayor o igual a la mayoria de edad (18 años)."
  );
} else {
  console.log("la edad promedio es menor que la mayuoria de edad (18 años).");
}
