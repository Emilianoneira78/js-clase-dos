let usuario = prompt("Ingresa tu usuario");
let password = prompt("ingresa tu password");

if (usuario === "admin" && (password == 123456 || "secreta")) {
  alert("Bienvenido");
} else {
  alert("Usuario o contraseña incorrecta");
}
