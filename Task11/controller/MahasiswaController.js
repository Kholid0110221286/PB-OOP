// import data mahasiswa
// const mahasiswa = require('../data/mahasiswa');
const mahasiswa = require('../data/mahasiswa');

// make MahasiswaController
class MahasiswaController{
    index(req, res){
        const data = { 
            message : 'Berikut adalah nama Mahasiswa',
            data : mahasiswa,
            total : mahasiswa.length
        };
        res.json(data);
    }
    store(req, res) {
        const { nama } = req.body;
        const datas = mahasiswa.push(req.body);

        const data = {
            message: `Menambahkan data mahasiswa: ${nama}`,
            data: mahasiswa,
            total: datas,
        };

        res.json(data);
    }
    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        mahasiswa[id] = req.body;

        const data = {
            message: `Mengedit mahasiswa id ${id}, nama ${nama}`,
            data: mahasiswa,
            total: mahasiswa.length,
        };

        res.json(data);
    }
    destroy(req, res) {
        const { id } = req.params;

        const mahasiswa = mahasiswa.indexOf(mahasiswa[id]);
        if (mahasiswa > -1) {
            mahasiswa.splice(mahasiswa, 1);
        }

        const data = {
            message: `Menghapus mahasiswa id ${id}`,
            data: mahasiswa,
            total: mahasiswa.length,
        };

        res.json(data);
    }
}

const object = new MahasiswaController();
module.exports = object;