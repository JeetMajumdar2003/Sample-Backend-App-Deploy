// Import Required Modules:
const express = require('express')
require('dotenv').config()

// Express App: Create an Express application, It is a top-level function exported by the express module.
const app = express()

// Port
const port = process.env.PORT || 3000


// GET Requests:
const routes = {
    "/": "Home page with links to all the routes",
    "/status": "Returns a status message indicating the server is running",
    "/html": "Returns a simple HTML string",
    "/api": "Returns a JSON object with user details",
    "/json": "Returns a JSON object with a message",
    "/error": "Returns an Internal Server Error",
    "/error-html": "Returns an Internal Server Error with HTML content",
    "/error-json": "Returns an Internal Server Error with JSON content",
    "/github/:id": "Returns the GitHub user details, please replace :id with the GitHub username",
    "/github/:id/img": "Returns the GitHub user avatar, please replace :id with the GitHub username",
    "/cat": "Returns a random cat image",
    "/dog": "Returns a random dog image",
    "/joke": "Returns a random joke",
    "/fact": "Returns a random fact",
    "/quote": "Returns a random quote",
    "/weather": "Returns the weather details of Kolkata",
    "/meme": "Returns a random meme",
    "/advice": "Returns a random advice",
    "/activity": "Returns a random activity",
};

app.get('/', (req, res) => {
    let links = '';
    for (let route in routes) {
        links += `<h4><a target="_main" href="${route}">${route}</a>: ${routes[route]}<br></h4>`;
    }
    res.send(links);
});

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

app.get('/github/:id', async (req, res) => {
    const response = await fetch(`https://api.github.com/users/${req.params.id}`)
    const data = await response.json()
    res.json(data)
})

app.get('/github/:id/img', async (req, res) => {
    const response = await fetch(`https://api.github.com/users/${req.params.id}`)
    const data = await response.json()
    res.send(`<img src="${data.avatar_url}" alt="avatar" />`)
})

app.get('/cat', async (req, res) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await response.json()
    res.send(`<img src="${data[0].url}" alt="cat" />`)
})

app.get('/dog', async (req, res) => {
    const response = await fetch('https://api.thedogapi.com/v1/images/search')
    const data = await response.json()
    res.send(`<img src="${data[0].url}" alt="dog" />`)
})

app.get('/joke', async (req, res) => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    res.send(`<h2>${data.setup}</h2><p>${data.punchline}</p>`)
})

app.get('/fact', async (req, res) => {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    const data = await response.json()
    res.send(`<h3>${data.text}</h3>`)
})

app.get('/quote', async (req, res) => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    res.send(`<h2><blockquote>${data.content}</blockquote></h2><p>${data.author}</p>`)
})

app.get('/weather', async (req, res) => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=22.54111111&longitude=88.33777778&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    const data = await response.json()
    res.send(`<h2>Temperature: ${data.current.temperature_2m}°C</h2><p>Wind Speed: ${data.current.wind_speed_10m} m/s</p><p>Time: ${data.current.time} GMT</p>`)
})

app.get('/meme', async (req, res) => {
    const response = await fetch('https://api.imgflip.com/get_memes')
    const data = await response.json()
    const meme = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
    res.send(`<img src="${meme.url}" alt="meme" />`)
})

app.get('/advice', async (req, res) => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    res.send(`<h2>${data.slip.advice}</h2>`)
})

app.get('/advice', async (req, res) => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    res.send(`<h2>${data.slip.advice}</h2>`)
})

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})