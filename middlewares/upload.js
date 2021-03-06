const multer = require('multer');
const routes = require('../routes');
const { uploadsFolder } = require('../config');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

module.exports = multer({ storage: storage });
