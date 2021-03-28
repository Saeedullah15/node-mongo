const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get ('/', (req, res) => {
    const fruit = {
        name : "apple",
        weight : "20gm",
        color : "red"
    }
    res.send(fruit);
})

app.get ('/fruits/banana', (req, res) => {
    res.send({name : 'banana', price : '50taka', weight : '10gm'});
})

const users = ["azim", "rahim", "karim", "sabbir", "plabon", "sakeeb"];
app.get ('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send ({id, name});
})

//post
app.post("/adduser", (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(5000, () => console.log("listening to port 5000"));