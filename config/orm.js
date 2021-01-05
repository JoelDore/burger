const connection = require('./connection')

const orm = {
    // Select all items from table
    selectAll(tableName, cb) {
        // SELECT * FROM {table}
        let query = `SELECT * FROM ${tableName};`
        console.log(query)

        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        });
    },

    // Insert an item into table
    insertOne(tableName, columnName, valueToInsert, cb) {
        // INSERT INTO {table} ({column})
        // VALUES ({value})
        let query = `INSERT INTO ${tableName} (${columnName}) `
        query += `VALUES ('${valueToInsert}');`

        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        });
    },

    // Update an item in table
    updateOne(tableName, id, columnName, newValue, cb) {
        // UPDATE {table} SET {column} = {value}
        // WHERE id = {id}
        let query = `UPDATE ${tableName} SET ${columnName} = '${newValue}'`
        query += `WHERE id = ${id};`

        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        });
    }
}

module.exports = orm