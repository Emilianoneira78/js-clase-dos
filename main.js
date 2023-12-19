const habitaciones = [
  { nombre: "Vin Diesel", costo: 3500 },
  { nombre: "La Mirta Legrand", costo: 5000 },
  { nombre: "La Gran Roviralta", costo: 6000 },
  { nombre: "It's Me Mariouuu", costo: 4500 },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const habitacionesDisponiblesElement = document.getElementById(
  "habitaciones-disponibles"
);

habitaciones.forEach((habitacion) => {
  const habitacionOption = document.createElement("div");
  habitacionOption.innerText = `${habitacion.nombre} - Precio: $${habitacion.costo}`;
  habitacionesDisponiblesElement.appendChild(habitacionOption);
});

const botonesReservaElement = document.getElementById("botones-reserva");

habitaciones.forEach((habitacion) => {
  const botonReserva = document.createElement("button");
  botonReserva.innerText = `Reservar ${habitacion.nombre}`;
  botonReserva.addEventListener("click", () => {
    agregarAlCarrito(habitacion);
  });
  botonesReservaElement.appendChild(botonReserva);
});

function agregarAlCarrito(habitacion) {
  carrito.push(habitacion);
  mostrarCarrito();
  actualizarLocalStorage();
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("habitaciones-carrito");
  carritoElement.innerHTML = "";

  let total = 0;

  carrito.forEach((habitacion, index) => {
    const habitacionElement = document.createElement("div");
    habitacionElement.innerHTML = `${habitacion.nombre} - Precio: $${habitacion.costo} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    carritoElement.appendChild(habitacionElement);
    total += habitacion.costo;
  });

  const totalCarritoElement = document.getElementById("total-carrito");
  totalCarritoElement.innerText = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
  actualizarLocalStorage();
}

function actualizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function finalizarCompra() {
  if (carrito.length > 0) {
    let total = carrito.reduce((acc, habitacion) => acc + habitacion.costo, 0);
    alert(
      `¡Gracias por su compra! Su reserva ha sido realizada con éxito. Total: $${total}`
    );
    carrito = [];
    mostrarCarrito();
    actualizarLocalStorage();
  } else {
    alert(
      "No hay habitaciones en el carrito. Por favor, seleccione al menos una habitación para realizar la compra."
    );
  }
}

window.onload = function () {
  mostrarCarrito();
};
