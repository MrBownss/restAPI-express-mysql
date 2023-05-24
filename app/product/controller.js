const connection = require('../../config/mysql.js')

const constanta = (res) => {
    return (error, result) => {
        if(error) {
            res.send({
                status: 'failed',
                response: 'failed to fetch data'
            })
        } else {
            res.send({
                status: 'succes',
                response: result
            })
        }
    }
}

const index = (req, res) => {
    connection.connect()
    connection.query({
        sql: 'SELECT * FROM product'
    }, constanta(res))
    connection.end()
}

const detail = (req, res) => {
    connection.connect()
    connection.query({
        sql: 'SELECT * FROM product WHERE id = ?',
        values: [req.params.id]
    }, constanta(res))
    connection.end()
}

module.exports = {
    index,
    detail
}