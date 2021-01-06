const orm = require('../config/orm')

const burger = {

    viewBurgers(cb) {
        orm.selectAll('burgers', cb)
    },

    addBurger(burgerName, cb) {
        orm.insertOne('burgers', 'burgers_name', burgerName, cb)
    },

    // Set 'devoured' to true (by id)
    devourBurger(id, cb) {
        orm.updateOne('burgers', id, 'devoured', 1, cb)
    }
}

module.exports = burger