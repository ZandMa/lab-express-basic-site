const express = require('express');
const app = express();

app.use(express.static('views'));

app.use(express.static('public'));

app.use(express.static('images'));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + `/views/home.htm`);
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + `/views/about.htm`);
});

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + `/views/works.htm`);
});

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + `/views/gallery.htm`);
});

app.listen(3000, () => {
    console.log(`Example app listening on port`)
});

