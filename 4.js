let usuario = prompt("Ingresa tu usuario");
let password = prompt("ingresa tu password");

if (usuario === "admin" && (password === 123456 || "secreta")) {
  alert("Bienvenido");
} else {
  alert("ingresaste mal tu usuario o tu contraseña volve a intentarlo");
}
