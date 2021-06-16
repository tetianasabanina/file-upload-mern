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
  // eslint-disable-next-line no-console
  console.log(file);
  cb(null, `IMAGE-${Date.now()}${path.extname(file.originalname)}`);
};

const storage = multer.diskStorage({
  destination: './public/',
  filename,
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('myfile');

const obj = (req, res) => {
  upload(req, res, () => {
    // eslint-disable-next-line no-console
    console.log('Request ---', req.body); // [Object: null prototype] {}
    // eslint-disable-next-line no-console
    console.log('Request file ---', req.file); // undefined
    const file = new File();
    file.meta_data = req.file;
    file.save().then(() => {
      res.send({ message: 'uploaded successfully' });
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

app.use(express.static(path.join(__dirname, './public/')));

app.get('/', (req, res) => res.send('<p>hello!</p>'));

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
