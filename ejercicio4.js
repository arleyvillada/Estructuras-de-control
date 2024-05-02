let año = parseFloat(prompt("ingrese el año"));

if (año % 4 == 0) {
  if (año % 100 != 0) {
    alert("es año bisiesto");
  } else if (año % 400 == 0) {
    alert("es año bisiesto");
  } else {
    alert("no es año bisiesto");
  }
} else {
  alert("no es año bisisesto");
}
