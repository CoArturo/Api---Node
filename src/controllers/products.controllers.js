import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getProducts = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Product')
    res.json(result.recordset)

}

export const getProduct = (req, res) => {
    res.send("obteniendo un producto")
}

export const createProduct = async (req, res) => {
    console.log(req.body)
    const pool = await getConnection();
    pool.request()
    .input('name', sql.VarChar, req.body.ProductName)
    .query('INSERT INTO Product(ProductName) Values(@name)')

}

export const updateProduct = (req, res) => {
    res.send("actualizando producto")
}

export const deleteProduct = (req, res) => {
    res.send("borrando producto")
}