const habitaciones = [
  { nombre: "Vin Diesel", costo: 3500 },
  { nombre: "La Mirta Legrand", costo: 5000 },
  { nombre: "La Gran Roviralta", costo: 6000 },
  { nombre: "It's Me Mariouuu", costo: 4500 },
];

let carrito = [];

function agregarHabitacion(indice) {
  const habitacion = habitaciones[indice];
  carrito.push(habitacion);
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("habitaciones-carrito");
  carritoElement.innerHTML = "";

  let total = 0;

  carrito.forEach((habitacion) => {
    const habitacionElement = document.createElement("div");
    habitacionElement.innerText = `${habitacion.nombre} - Precio: $${habitacion.costo}`;
    carritoElement.appendChild(habitacionElement);

    total += habitacion.costo;
  });

  const totalElement = document.getElementById("total-carrito");
  totalElement.innerText = `Total: $${total}`;
}

function finalizarCompra() {
  const totalCompra = carrito.reduce(
    (total, habitacion) => total + habitacion.costo,
    0
  );
  alert(`¡Gracias por tu compra! El total es de $${totalCompra}.`);

  carrito = [];
  mostrarCarrito();
}
