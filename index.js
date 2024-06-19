// Import Required Modules:
const express = require('express')
require('dotenv').config()

// Express App: Create an Express application, It is a top-level function exported by the express module.
const app = express()

// Port
const port = process.env.PORT || 3000


// GET Requests: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/status', (req, res) => {
    res.send('Server is up and running')
})

app.get('/html', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 25,
        email: 'johndee@microsoft.com',
        address: {
            city: 'Seattle',
            state: 'Washington',
            country: 'United States'
        },
        company: 'Microsoft',
        salary: 100000,
    })
})

app.get('/json', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.get('/error', (req, res) => {
    res.status(500).send('Internal Server Error')
})

app.get('/error-html', (req, res) => {
    res.status(500).send('<h1>Internal Server Error</h1>')
})

app.get('/error-json', (req, res) => {
    res.status(500).json({ message: 'Internal Server Error' })
})


// Listen on port 3000
app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})