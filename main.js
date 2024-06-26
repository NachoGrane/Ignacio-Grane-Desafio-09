import './css/style.css';

/* Inciso 1 */
console.warn('Inciso 1');

const inventarioFrutas = ['naranja', 'pera', 'manzana', 'naranja', 'banana'];
console.log(inventarioFrutas);
let elementoEliminado = inventarioFrutas.pop();
console.log(`La fruta eliminada es: ${elementoEliminado}`);
console.log(inventarioFrutas);
inventarioFrutas.push('mango');
console.log(inventarioFrutas);

/* Inciso 2 */
console.warn('Inciso 2');

const listaTareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

console.log(listaTareas);

elementoEliminado = listaTareas.shift();
console.log(listaTareas);
console.log(`Tarea completada: ${elementoEliminado}`);
listaTareas.unshift('Nueva Tarea');
console.log(listaTareas);

/* Inciso 3 */
console.warn('Inciso 3');

const arrayClientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4'];
console.log(arrayClientes);
arrayClientes.push('Cliente Nuevo 1', 'Cliente Nuevo 2');
console.log(arrayClientes);
elementoEliminado = arrayClientes.shift();
console.log(`El cliente atendido es: ${elementoEliminado}`);

/* Inciso 4 */
console.warn('Inciso 4');

const arrayNumeros = [5, 6, 4, 3, 8];
console.log(arrayNumeros);
for (let i = 1; i < 4; i++) {
  console.log(`Repeticion número ${i}`);
  elementoEliminado = arrayNumeros.pop();
  arrayNumeros.unshift(elementoEliminado);
  console.log(arrayNumeros);
}

/* Inciso 5 */
console.warn('Inciso 5');

const arrayCarrito = [];
let producto;
// for (let i = 1; i < 4; i++) {
//   producto = prompt('Ingrese un producto');
//   arrayCarrito.push(producto);
//   console.log(arrayCarrito);
// }
// let decisionUsuario = window.confirm(
//   'Desea eliminar el último producto producto?',
// );
// if (decisionUsuario) {
//   arrayCarrito.pop();
//   console.log(arrayCarrito);
// } else console.log(arrayCarrito);

/* Inciso 6 */
console.warn('Inciso 6');

const arrayValores = [10, 5, 6, 8, 4];
console.log(arrayValores);
const arrayDoblarValores = arrayValores.map((numero) => numero * 2);
console.log(arrayDoblarValores);

/* Inciso 7 */
console.warn('Inciso 7');

const arrayNombres = ['nacho', 'juan', 'carla', 'josefina', 'chiara'];
console.log(arrayNombres);
const arrayNombresMayuscula = arrayNombres.map((nombre) =>
  nombre.toUpperCase(),
);
console.log(arrayNombresMayuscula);

/* Inciso 8 */
console.warn('Inciso 8');

const arrayPrecios = [100, 200, 50, 30, 40];
console.log(arrayPrecios);
const arrayPreciosConIVA = arrayPrecios.map((precio) => precio * 1.21);
console.log(arrayPreciosConIVA);

/* Inciso 9 */
console.warn('Inciso 9');

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumbers);
const arrayNumbersCuadrado = arrayNumbers.map((numero) => numero * numero);
console.log(arrayNumbersCuadrado);

/* Inciso 10 */
console.warn('Inciso 10');

const numeros = [3, 4, 6, 7, 13, 12, 16];
console.log(numeros);
const arrayNumerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(arrayNumerosPares);

/* Inciso 11 */
console.warn('Inciso 11');

const arrayPalabras = ['calle', 'autobus', 'sol', 'guitarra'];
console.log(arrayPalabras);
const arrayPalabrasLargas = arrayPalabras.filter(
  (palabra) => palabra.length > 5,
);
console.log(arrayPalabrasLargas);

/* Inciso 12 */
console.warn('Inciso 12');

const productos = [
  {
    nombre: 'Arroz',
    precio: 1100,
  },
  {
    nombre: 'Leche',
    precio: 450,
  },
  {
    nombre: 'Golosinas',
    precio: 220,
  },
  {
    nombre: 'Pollo',
    precio: 3100,
  },
];
console.log(productos);
const productosOferta = productos.filter((producto) => producto.precio < 500);
console.log(productosOferta);

/* Inciso 13 */
console.warn('Inciso 13');

const estudiantes = [
  {
    nombre: 'Martin',
    nota: 7,
  },
  {
    nombre: 'Guadalupe',
    nota: 10,
  },
  {
    nombre: 'Maxi',
    nota: 8,
  },
  {
    nombre: 'Lucia',
    nota: 3,
  },
  {
    nombre: 'Lorenzo',
    nota: 5,
  },
];

console.log(estudiantes);

const estudiantesAprobados = estudiantes.filter((alumno) => alumno.nota >= 7);
console.log(estudiantesAprobados);

/* Inciso 14 */
console.warn('Inciso 14');

const tareas = [
  {
    description: 'Tarea 1',
    completada: true,
  },
  {
    description: 'Tarea 2',
    completada: false,
  },
  {
    description: 'Tarea 3',
    completada: false,
  },
  {
    description: 'Tarea 4',
    completada: true,
  },
];
console.log(tareas);
const tareasCompletadas = tareas.filter((tarea) => tarea.completada);
console.log(tareasCompletadas);

/* Inciso 15 */
console.warn('Inciso 15');

const listaNombre = ['Pedro', 'Julieta', 'Andrea', 'Ricardo', 'Alfredo'];
console.log(listaNombre);
listaNombre.forEach((nombre) => console.log(`El nombre es: ${nombre}`));

/* Inciso 16 */
console.warn('Inciso 16');

const arrayEdades = [19, 30, 43, 33, 21, 24];
console.log(arrayEdades);
let sumaEdades = 0;
arrayEdades.forEach((edad) => (sumaEdades = sumaEdades + edad));

console.log(`El total de las edades es de ${sumaEdades}`);

/* Inciso 17 */
console.warn('Inciso 17');

const arrayProductos = [
  {
    nombre: 'Arroz',
    precio: 1100,
  },
  {
    nombre: 'Leche',
    precio: 450,
  },
  {
    nombre: 'Golosinas',
    precio: 220,
  },
  {
    nombre: 'Pollo',
    precio: 3100,
  },
];

arrayProductos.forEach(
  (producto) => (producto.precio = producto.precio - producto.precio * 0.1),
);

console.log(arrayProductos);

/* Inciso 18 */
console.warn('Inciso 18');

const arrayInvitados = [
  {
    nombre: 'Pepe',
    enviado: false,
  },
  {
    nombre: 'Ivana',
    enviado: false,
  },
  {
    nombre: 'Matias',
    enviado: false,
  },
  {
    nombre: 'Florencia',
    enviado: false,
  },
  {
    nombre: 'Soledad',
    enviado: true,
  },
];

arrayInvitados.forEach((invitado) => {
  if (!invitado.enviado) {
    invitado.enviado = true;
    console.log(`Invitación enviada a ${invitado.nombre} por consola.`);
  } else
    console.log(
      `La invitación para ${invitado.nombre} ya ha sido enviada previamente.`,
    );
});
