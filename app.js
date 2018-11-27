const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const knex = require('knex')
const queries = require('./queries')

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

console.log(knex)

const listener = () => console.log(`Listening on port ${port}!`);
app.listen(port, listener);
module.exports = app

