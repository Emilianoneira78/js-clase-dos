const habitaciones = [
  { nombre: "Vin Diesel", costo: 3500 },
  { nombre: "La Mirta Legrand", costo: 5000 },
  { nombre: "La Gran Roviralta", costo: 6000 },
  { nombre: "It's Me Mariouuu", costo: 7000 },
];

const carrito = [];

function pedirHabitacion() {
  const opcion = parseInt(
    prompt(
      "Elija su habitación (1-4):\n" +
        "1. Vin Diesel\n" +
        "2. La Mirta Legrand\n" +
        "3. La Gran Roviralta\n" +
        "4. It's Me Mariouuu"
    )
  );

  if (opcion >= 1 && opcion <= 4) {
    return habitaciones[opcion - 1];
  } else {
    alert("Opción inválida");
    return null;
  }
}

function agregarHabitacion() {
  const habitacion = pedirHabitacion();

  if (habitacion !== null) {
    carrito.push(habitacion);
    alert("Habitación agregada al carrito");

    actualizarCarrito();
  }
}

function eliminarHabitacionDeLaCompra(index) {
  carrito.splice(index, 1);

  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoElement = document.getElementById("habitaciones-carrito");
  carritoElement.innerHTML = "";

  let total = 0;

  carrito.forEach((habitacion, index) => {
    const row = document.createElement("tr");

    const nombreCell = document.createElement("td");
    nombreCell.textContent = habitacion.nombre;
    row.appendChild(nombreCell);

    const costoCell = document.createElement("td");
    costoCell.textContent = habitacion.costo;
    row.appendChild(costoCell);

    const accionesCell = document.createElement("td");
    const eliminarButton = document.createElement("button");
    eliminarButton.textContent = "Eliminar";
    eliminarButton.addEventListener("click", () => {
      eliminarHabitacionDeLaCompra(index);
    });
    accionesCell.appendChild(eliminarButton);
    row.appendChild(accionesCell);

    carritoElement.appendChild(row);

    total += habitacion.costo;
  });

  const totalElement = document.getElementById("total-carrito");
  totalElement.textContent = `Total a pagar: $${total}`;
}

function calcularTotal() {
  let total = 0;

  carrito.forEach((habitacion) => {
    total += habitacion.costo;
  });

  return total;
}

function finalizarCompra() {
  const total = calcularTotal();

  if (carrito.length === 0) {
    alert("El carrito está vacío");
  } else {
    const confirmacion = confirm(
      `Total a pagar: $${total}\n¿Desea finalizar la compra?`
    );

    if (confirmacion) {
      alert("¡Gracias por su compra!");

      carrito.length = 0;
      actualizarCarrito();
    }
  }
}
