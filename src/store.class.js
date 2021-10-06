const Product = require('./product.class');

// Aquí la clase Store

// y tendrás que exportarla

class Store {
    constructor(id) {
        this.id = id
        this.products = []
    }

    findProduct(id) {
        return this.products.find(product => product.id === id)
    }

    addProduct(data) {
        if (!data.name) {
            throw 'El producto debe de tener un nombre'
        }

        if (!data.price) {
            throw 'El producto debe de tener un precio'

        } 
        if(Math.sign(data.price) !== 1) {
            throw 'El producto debe de tener un precio mayor que 0'
        }

        if (data.units) {
            if (Math.sign(data.units) <= 0) {
                throw 'Las unidades deben ser positivas'
            }

            if (!Number.isInteger(data.units)) {
                throw 'Las unidades deben de ser un entero'
            }
        }

        const newProd = new Product(
            this.getMaxId() + 1,
            data.name,
            data.price,
            data.units
        )

        this.products.push(newProd)
        return newProd
    }

    getMaxId() {
        return this.products.reduce((max,producto) => producto.id > max ? producto.id : max,0)
    }

    delProduct(id) {
        let product = this.findProduct(id)
        if (!product) {
            throw 'No se encuentra el producto buscado en el almacén'
        }

        if(product.units !== 0) {
            throw 'No se puede eliminar el producto ya que hay unidades en el almacén'
        }

        return this.products.splice(this.products.findIndex(product => product.id === id))[0]
    }

    changeProduct(data) {
        let producto = this.findProduct(data.id)
        if (!producto) {
            throw 'No existe el producto en el almacén'
        }

        if (data.name) {
            producto.setName(data.name)
        }

        if (data.price || data.price == 0) {
            if (data.price >= 0) {
                producto.setPrice(data.price)
            } else {
                throw 'El precio debe de ser un número positivo'
            }
        }

        if (data.units) {
            if (Math.sign(data.units) <= 0) {
                throw 'Las unidades deben ser positivas'
            }

            if (!Number.isInteger(data.units)) {
                throw 'Las unidades deben de ser un entero'
            }

            producto.setUnits(data.units)
        }

        return producto

    }

    changeProductUnits(id, units) {

        let producto = this.findProduct(id)

        if (!Number.isInteger(units)) {
            throw 'Las unidades deben de ser un número entero'
        }
        if (!producto) {
            throw 'No se encuentra el producto buscado en el almacén'
        }

        return producto.changeUnits(units)

    }

    totalImport() {
        return this.products.reduce((total,producto) => total += (producto.productImport() * producto.units),0).toFixed(2)
    }

    underStock(units) {
        return this.products.filter(producto => producto.units < units)
    }

    orderByUnits() {
        return this.products.sort(function(producto1,producto2) {
            return producto2.units - producto1.units
        });
    }

    orderByName() {
        return this.products.sort((producto1,producto2) => producto1.name.localeCompare(producto2.name));
    }

    toString() {
        let productos = ""
        this.products.forEach(product => {
            productos += ('\n- ' + product)

        }); 
        return 'Almacén ' + this.id + ' => ' + this.products.length + ' productos: ' + this.totalImport() + ' €' + productos
    }

}

module.exports = Store;
