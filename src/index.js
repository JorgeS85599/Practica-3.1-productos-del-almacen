'use strict'

const Product = require('./product.class');
// Creamos un nuevo almacén con id 1
// Antes deberás haber importado la 
// clase Store para poder usarla
const Store = require('./store.class');
let almacen1 = new Store(1);


// Añadimos los 4 objetos que nos piden
let producto1 = new Product(1,'TV Samsung MP45',345.95,3)
let producto2 = new Product(2,'Ábaco de madera',245.95)
let producto3 = new Product(3,'impresora Epson LX-455',45.95)
let producto4 = new Product(4,'USB Kingston 16GB',5.95,45)
try {
    almacen1.addProduct(producto1)
} catch(error) {
    console.error(error)
}

try {
    almacen1.addProduct(producto2)
} catch(error) {
    console.error(error)
}

try {
    almacen1.addProduct(producto3)
} catch(error) {
    console.error(error)
}

try {
    almacen1.addProduct(producto4)
} catch(error) {
    console.error(error)
}

// Hacemos las 5 modificaciones

try {
    almacen1.changeProduct({id:1, price: 325.90, units: 8})
} catch(error) {
    console.error(error)
}

try {
    almacen1.changeProductUnits(2,15)
} catch(error) {
    console.error(error)
}

try {
    almacen1.changeProduct({id:3, price: 55.90, units: -2})
} catch(error) {
    console.error(error)
}

try {
    almacen1.changeProductUnits(1,-10)
} catch(error) {
    console.error(error)
}

try {
    almacen1.changeProduct({id:2, name: 'Ábaco de madera (nuevo modelo)'})
} catch(error) {
    console.error(error)
}


// Mostramos por consola todo lo que nos piden
console.log(almacen1.toString())

console.log('LISTADO DEL ALMACÉN alfabético')

let almacenOrdenadoAlfabeticamente1 = almacen1.orderByName()
almacenOrdenadoAlfabeticamente1.forEach(producto => {
    console.log('- ' + producto)
});

console.log('LISTADO DEL ALMACÉN por existencias')

let almacenOrdenadoPorUnidades1 = almacen1.orderByUnits()
almacenOrdenadoPorUnidades1.forEach(producto => {
    console.log('- ' + producto)
});

console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS')

let productosPocasExistencias1 = almacen1.underStock(10)
productosPocasExistencias1.forEach(producto => {
    console.log('- ' + producto)
});

// Eliminamos los 2 productos
try {

    almacen1.delProduct(1)

} catch(error) {
    console.error(error)

}

try {

    almacen1.delProduct(3)

} catch(error) {
    console.error(error)

}

// Mostramos por consola todo lo que nos piden
console.log(almacen1.toString())

console.log('LISTADO DEL ALMACÉN alfabético')

let almacenOrdenadoAlfabeticamente2 = almacen1.orderByName()
almacenOrdenadoAlfabeticamente2.forEach(producto => {
    console.log('- ' + producto)
});

console.log('LISTADO DEL ALMACÉN por existencias')

let almacenOrdenadoPorUnidades2 = almacen1.orderByUnits()
almacenOrdenadoPorUnidades2.forEach(producto => {
    console.log('- ' + producto)
});

console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS')

let productosPocasExistencias2 = almacen1.underStock(10)
productosPocasExistencias2.forEach(producto => {
    console.log('- ' + producto)
});

