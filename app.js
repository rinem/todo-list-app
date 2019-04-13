var express = require("express");
var app = express();
var todoController = require('./controllers/todoController');
var port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.set("view engine", "ejs");

todoController(app);

app.listen(port, function() {
    console.log("Server Up");
});
