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
    Swal.fire({
      title: "¿Está seguro de reservar esta habitación?",
      text: `Habitación: ${habitacion.nombre} - Precio: $${habitacion.costo}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, reservar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        agregarAlCarrito(habitacion);
        Swal.fire(
          "¡Reservado!",
          "La habitación se ha reservado con éxito.",
          "success"
        );
      }
    });
  });
  botonesReservaElement.appendChild(botonReserva);
});

function agregarAlCarrito(habitacion) {
  carrito.push(habitacion);
  actualizarCarritoYLocalStorage();
}

function actualizarCarritoYLocalStorage() {
  mostrarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
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
  actualizarCarritoYLocalStorage();
}

function finalizarCompra() {
  if (carrito.length > 0) {
    let total = carrito.reduce((acc, habitacion) => acc + habitacion.costo, 0);
    Swal.fire({
      title: "¿Finalizar Reserva?",
      text: `Total: $${total}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, finalizar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        realizarPago(total);
        carrito = [];
        actualizarCarritoYLocalStorage();
      }
    });
  } else {
    Swal.fire("Error", "El carrito está vacío", "error");
  }
}

function realizarPago(total) {
  Swal.fire(
    "¡Reserva Finalizada!",
    `Se ha realizado el pago por un total de $${total}`,
    "success"
  );
}

mostrarCarrito();
