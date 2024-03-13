const express = require("express");

const app = express()


app.get('/', (req, res) => {
    res.status(200).send('Get ok!');
  });

app.post('/', (req, res) => {
    res.status(201).send('Post ok!')
})

app.delete('/', (req, res) => {
    res.status(204).send('Post ok!')
})


 app.listen(3000, function(){
    console.log("App ok!")
 })

 module.exports = app