const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const knex = require('knex')
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser())
app.use(cors())

app.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    queries.getById(id).then(students => res.send(students))
})

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.delete('/:id', (req, res) => {
    queries.deleteStudent(req.params.id).then(students => res.send({ status: 204, message: "it has been deleted" }))
})

app.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(data => res.json(data));
})

const listener = () => console.log(`Listening on port ${port}!`);
app.listen(port, listener);


