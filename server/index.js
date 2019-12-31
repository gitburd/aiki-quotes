const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var path= require('path');

//middle 

app.use(bodyParser.json());
app.use(cors());

const quotes = require('./routes/api/quotes');

app.use('/api/quotes', quotes); 

if (process.env.NODE_ENV === "production"){
    // Serve any static files
    app.use(express.static(path.join(__dirname, "/../react/build")));
    // Handle React routing, return all requests to React app
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../react/build", "index.html"));
  });

}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`I'm listening on port ${port}`));


 