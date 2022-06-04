const express = require('express');
const upload = require('./middlewares/upload');
const router = express.Router();


router.post('/uploads', upload.single('photo'), (req, res, next) => {
    console.log('Success', req.file);
    return res.send({
        link: 'http://localhost:5000/uploads/' + req.file.filename,
    });
});

module.exports = router;