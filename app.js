const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('The Route Worked!')
})

const listener = () => console.log(`Listening on port ${port}!`);
app.listen(port, listener);
module.exports = app

