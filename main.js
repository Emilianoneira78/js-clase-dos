/*
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
    "(1) Vin Disel, (2) La Mirta Legrand, (3) La Gran Roviralta, (4) It's Me Mariouuu "
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
  alert("no Elegiste ninguna Vuelva prontosss");
}

function desuento() {
  let respuesta = prompt(
    "¿Queeres acceder al descuento quedándote a pernoctar y te clavas tambien un desayuno? (responde si o no)"
  );

  while (respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt(
      "Por favor, responde si o no: ¿queres acceder al descuento del 20% rufian?"
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

desuento();
alert(
  "Gracias por ponerla en Hotel Faraon hasta el proximo fuki fuki y chucu chucu chucu chucu"
);
*/
/*


function kilo(precio) {
  console.log("el kilo de peras esta" + " " + precio + " " + "pesos");
}
kilo(20);
*/
/*
function hotel(nombre) {
  console.log("bienenido" + nombre + " " + "hotel Faraon");
}

hotel("emiliano");
*/
/*
function saludar(nombre) {
  return "hola" + nombre;
}
let saludarA = saludar("carpi");
console.log(saludarA);

function suma(a, b) {
  return a + b;
}
console.log(suma(5, 4));


const RESTA = (a, b) => a - b;
console.log(RESTA(5, 2));
*/

//-------OBJETOS-------
/*
const USUARIO1 = {
  nombre: "Emi",
  edad: 44,
  direccion: "capichuelo",
  hobbies: {
    hobbie1: "futbol",
    hobbie2: "compu",
  },
};

const USUARIO2 = {
  nombre: "Emma",
  edad: 12,
  direccion: "ezeiza",
};

USUARIO1["edad"] = 46;

console.log(USUARIO1.edad);
console.log(USUARIO2.direccion);
*/

//--------constructor-------
/*const PRODUCTO1={
  titulo: "sillon"
  color:"rojo"
  precio:5000
  }
  


function Producto(titulo, color, precio) {
  this.titulo = titulo;
  this.color = color;
  this.precio = precio;
}

const producto1 = new Producto("sillon", "rojo", 5000);
const producto2 = new Producto("silla", "azul", 10000);
console.log(producto1);
console.log(producto2);
*/

//-------------Clases---------
/*
class Producto {
  constructor(titulo, color, precio) {
    this.titulo = titulo;
    this.color = color;
    this.precio = precio;
  }
}
const producto1 = new Producto("sillon", "rojo", 5000);
const producto2 = new Producto("silla", "azul", 10000);
console.log(producto1);
console.log(producto2);
*/

//--------------METODOS----------
/*
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cumple = function () {
      this.edad++;
    };
    this.saludar = function () {
      console.log("hola soy" + this.nombre);
    };
  }
}
const persona1 = new Persona("Emiliano", "Neira", 44);
const persona2 = new Persona("Emma", "Ferrandi", 12);
/*
persona1.saludar();
persona1.cumple();
console.log(persona1.edad);
console.log("nombre" in persona1);
*/

/*---------operador in-------

if ("direccion" in persona1) {
  console.log(persona1.direccion);
} else {
  console.log("no hay direccion");
}*/

//----------operador FOR--------

/*
for (const propiedad in persona1) {
  console.log(propiedad);
}

function saludo() {
  console.log("hola soy" + this.color);
}
const IVA = 1.21;
const producto1 = {
  articulo: "sillon",
  color: "rojo",
  condicion: IVA,
  saludo,
};
producto1.saludo();
console.log(producto1);
*/

//----------ARRAY----------

/*const numeros=[1,2,3,4,5]
const buleanos=[true,true,false];
const mezcla=["sillon"1,2,true];
const usuarios=[
  {
    nombre:"emi",
    edad:44,
  },
  {
    nombre:"tomy",
    edad:15,
  },
]
*/

//-----accediendo a los array
//console.log(productos);
//console.log(productos[3]);
//console.log(productos[2]);
//-------recorrer array---
/*
for (let i = 0; i < 4; i++) {
  console.log(productos[i]);
}
*/
//--------metodos ----
//length
//recorre
/*
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}
*/
//--push--

/*productos.push("caja");
console.log(productos);
productos.unshift("caja");
*/
/*
productos.shift();
console.log(productos);
*/

/*productos.splice(1, 2);
console.log(productos);
*/
//join agrega separador spring
//console.log(productos.join("/"));

//----concat---- une dos arrays
/*const productos = ["sillon", "silla", "mesa", "puerta", "ropero", "cama"];
const productos2 = [1, 2, 3, 4, 5];
const productosFinal = productos.concat(productos2);
console.log(productosFinal);
*/
//-----slice----genera una copia del array parametros
//(donde arranca, hasta donde toma restanto uno)
/*
const productoshabiatacion = productos.slice(1, 5);
console.log(productoshabiatacion);
*/
//---------index of---saltear el numero de indice
//de nuestro elemento
//console.log(productos.indexOf("mesa"));

//--include saber si un elemento esta en el array
/*
console.log(productos.includes("mesa"));
if (productos.includes("silla")) {
  console.log(productos.indexOf("silla"));
} else {
  console.log("cama no esta en el array");
}
*/
/*
const productos = ["sillon", "silla", "mesa", "puerta", "ropero", "cama"];
//----reverse ---invierte el orden del array
console.log(productos.reverse());
*/
alert("Bienvenido al Hotel el Faraon");
const habitaciones = [
  { nombre: "Vin Diesel", costo: 3500 },
  { nombre: "La Mirta Legrand", costo: 5000 },
  { nombre: "La Gran Roviralta", costo: 6000 },
  { nombre: "It's Me Mariouuu", costo: 7000 },
];

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

function calcularPrecio(habitacion, pagoEnEfectivo) {
  let precio = habitacion.costo;

  if (pagoEnEfectivo) {
    const descuento = 0.1; // 10% de descuento
    precio -= precio * descuento;
  }

  return precio;
}

const habitacion = pedirHabitacion();
if (habitacion !== null) {
  const respuesta = prompt(
    "¿Va a pagar en efectivo? (responda si o no)"
  ).toLowerCase();

  let pagoEnEfectivo = false;
  if (respuesta === "si") {
    pagoEnEfectivo = true;
  }

  const precio = calcularPrecio(habitacion, pagoEnEfectivo);

  alert(
    "Usted ha elegido la habitación " +
      habitacion.nombre +
      " con un costo de $" +
      precio
  );
}
alert("gracias por ponerla en Hotel el Faraon, Vuelva prontosss");

const costoMaximo = 5500;

const habitacionesFiltradas = habitaciones.filter(
  (habitacion) => habitacion.costo < costoMaximo
);

console.log(`Habitaciones con un costo menor a ${costoMaximo}:`);
console.log(habitacionesFiltradas);
