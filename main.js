let registro = prompt("¿Estas Registrado?, contesta si o no");
let mayorEdad = prompt("¿Que edad tenes?");

if (registro === "si" && mayorEdad >= 18) {
  alert("podes ingresar");
} else {
  alert("no cumplis con la edad para ingresar");
}
