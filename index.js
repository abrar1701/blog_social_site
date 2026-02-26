import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

let aee = [];

const app = express();
const port = 3000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage})

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=> {
    console.log(`Listening in port ${port}`);
});

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.get('/yuvan', (req, res) => {
    res.send("Hello i am yuvan");
});

app.post('/abrar', upload.single('img'), (req, res) => {
    console.log(req.file);
    res.set('Content-Type', req.file.mimetype);
    res.send(req.file.buffer);
});