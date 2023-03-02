const route = require("express").Router();
const { jurusan } = require("../controllers");

route.get("/jurusan", jurusan.getDataJurusan);
route.get("/jurusan/:id", jurusan.getDataJurusanById);
route.post("/jurusan/add", jurusan.addDataJurusan);
route.post("/jurusan/edit/:id", jurusan.editDataJurusan);
route.post("/jurusan/delete/", jurusan.deleteDataJurusan);

module.exports = route;
