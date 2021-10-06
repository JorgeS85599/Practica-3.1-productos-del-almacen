// Aquí la clase Product


class Product  {
    constructor (id, name, price, units = 0){
        this.id = id
        this.name = name
        this.price = price
        this.units = units
    }

    changeUnits(units){
        if (units + this.units >= 0) {
            this.units += units
            return this
        }
        throw 'No puesdes restar ' + units + ' unidades porque solo tienes ' + this.units
    }

    productImport() {
        return Number((this.units * this.price).toFixed(2))
    }

    toString() {
        return this.name + ': ' + this.units + ' uds. x ' + this.price.toFixed(2) + ' €/u = ' + this.productImport() + ' €'
    }

    setName(name) {
        this.name = name
    }

    setPrice(price) {
        this.price = price
    }

    setUnits(units) {
        this.units = units
    }





}
    module.exports = Product;
