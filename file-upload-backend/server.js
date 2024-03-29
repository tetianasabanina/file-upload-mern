/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

require('./model');

const File = mongoose.model('file');
const router = express.Router();

const filename = (req, file, cb) => {
  const { name } = req.body;
  cb(null, `${name}-${Date.now()}${path.extname(file.originalname)}`);
};

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename,
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('myFile');

const obj = (req, res) => {
  upload(req, res, () => {
    console.log('Request ---', req.body);
    console.log('Request file ---', req.file);
    const file = new File();
    file.meta_data = req.file;
    file.save().then(() => {
      res.send({
        message: 'uploaded successfully',
        file: req.file,
      });
    });
    /* Now do what ever you want to do */
  });
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

router.post('/upload', obj);

app.use(router);

app.use('/public/uploads', express.static(path.join(__dirname, './public/uploads')));

app.get('/', (req, res) => res.send('<p>hello!</p>'));

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
