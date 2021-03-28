const express = require ('express');

const app = express();

app.get ('/', (req, res) => {
    res.send('i know how to open node....yay!!!');
})

app.listen(5000, () => console.log("listening to port 5000"));