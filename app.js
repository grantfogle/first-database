const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const knex = require('knex')

app.get('/', (req, res) => {
    res.send('The Route Worked!')
})

console.log(knex)

const listener = () => console.log(`Listening on port ${port}!`);
app.listen(port, listener);
module.exports = app

