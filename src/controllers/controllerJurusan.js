const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
    console.error(err);
});

module.exports = {
    getDataJurusan(req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(`SELECT * FROM majors`, (error, results) => {
                if (error) throw error;
                res.send({
                    success: true,
                    message: "berhasil ambil data",
                    data: results,
                });
            });
            connection.release();
        });
    },

    getDataJurusanById(req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(
                `SELECT * FROM majors WHERE majorsId=${req.params.id}`,
                (err, results) => {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: "berhasil ambil data",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },

    addDataJurusan(req, res) {
        const { majorsId, major_name } = req.body;
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(
                `INSERT INTO majors (majorsId, major_name) VALUES (?, ?)`,
                [majorsId, major_name],
                (err, results) => {
                    if (err) throw err;
                    res.send({
                        succes: true,
                        message: "berhasil tambah data",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },
    editDataJurusan(req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(
                `UPDATE majors SET major_name = (?) WHERE majorsId=${req.params.id}`,
                [req.body.major_name],
                (err, results) => {
                    if (err) throw err;
                    res.send({
                        succes: true,
                        message: "berhasil update data",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },
    deleteDataJurusan(req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(
                `DELETE FROM majors WHERE majorsId=${req.body.majorsId}`,
                (err, results) => {
                    if (err) throw err;
                    res.send({
                        succes: true,
                        message: "berhasil dihapus",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },
};
