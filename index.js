const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const courses = require('./data/data.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Course API Running');
})

app.listen(port, () => {
    console.log('CS Academy Server Running On Port:', port);
})

app.get('/all-courses', (req, res) => {
    res.send(courses)
})