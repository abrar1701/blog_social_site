import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

let arr = [];

const app = express();
const port = 3000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage})

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=> {
    console.log(`Listening in port ${port}`);
});

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/profile', (req, res) => {
    res.render('profile.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/post', (req, res) => {
    res.render('index.ejs');
});


app.post('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/post', upload.single('img'), (req, res) => {
    arr.push({
        name: req.body.title,
        description: req.body.description,
        file: `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
    });
    console.log(arr[0]);
    res.render('post.ejs');
});



// app.get('/', (req, res) => {
//     res.render("index.ejs")
// });

// app.get('/yuvan', (req, res) => {
//     res.send("Hello i am yuvan");
// });

// app.post('/abrar', upload.single('img'), (req, res) => {
//     console.log(req.file);
//     res.set('Content-Type', req.file.mimetype);
//     res.send(req.file.buffer);
// });