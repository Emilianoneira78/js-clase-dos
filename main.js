let vinDisel = 3500;
let mirtaLegrand = 5000;
let granRoviralta = 6000;
let mario = 7000;

let nombre = prompt("Ingrese su nombre");

function bienvenido(nombre) {
  alert("Hola " + nombre + ". Bienvenido al Hotel Alojamiento El Faraon");
}

bienvenido(nombre);

alert(
  "Elija su habitación entre nuestra amplia gama de opciones (Ingrese el número para continuar)"
);
alert("Entre ellas:");
const HABITACIONES = parseInt(
  prompt(
    "(1) Vin Disel, (2) La Mirta Legrand, (3) La Gran Roviralta, (4) It's Me Mariouuu (Para salir, escriba SALIR)"
  )
);

if (HABITACIONES === 1) {
  alert(
    "Elegiste la habitación Vin Diesel para placer mas rapido y mas Furioso con un costo de " +
      vinDisel
  );
} else if (HABITACIONES === 2) {
  alert(
    "Elegiste la habitación La Mirta Legrand para quedarse eternamente de lo comoda que es con un costo de " +
      mirtaLegrand
  );
} else if (HABITACIONES === 3) {
  alert(
    "Elegiste la habitación La Gran Roviralta los ceniceros estan pegados a la mesa de luz con un costo de " +
      granRoviralta
  );
} else if (HABITACIONES === 4) {
  alert(
    "Elegiste la habitación It's Me Mariouuu (leer con vos de Luigi ) con un costo de " +
      mario
  );
} else {
  alert("no Elegiste ninguna vuelva prontos");
}

function preguntarDescuento() {
  let respuesta = prompt(
    "¿Quieres acceder al descuento quedándote a pernoctar? (responde si o no)"
  );

  while (respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt(
      "Por favor, responde si o no: ¿quieres acceder al descuento del 20% rufian?"
    );
  }

  if (respuesta === "si") {
    let descuento = 0.2; // Descuento del 20%
    let total;

    if (HABITACIONES === 1) {
      total = vinDisel - vinDisel * descuento;
    } else if (HABITACIONES === 2) {
      total = mirtaLegrand - mirtaLegrand * descuento;
    } else if (HABITACIONES === 3) {
      total = granRoviralta - granRoviralta * descuento;
    } else if (HABITACIONES === 4) {
      total = mario - mario * descuento;
    }

    alert("El costo total de la habitación con descuento es: $" + total);
  } else {
    alert("Hasta que las venas ardan por un  proximo encuentro");
  }
}

preguntarDescuento();
alert("gracias por ponerla en Hotel Faraon hasta el proximo fuki fuki");
