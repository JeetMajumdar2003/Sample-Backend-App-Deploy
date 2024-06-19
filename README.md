## It's a simple fun backend app using Node.js and Express.js. Which lets you go to different routes and GET the data from the server. It also fetches data from different APIs like TheCatAPI, TheDogAPI, and more. It also fetches data from GitHub API and returns the user's profile and avatar image. It also returns random jokes, facts, quotes, weather, memes, advice, and activities. It also has error handling routes to simulate internal server errors.

### Here are the available routes:
- GET `/` - Returns a simple string "Hello World!"
- GET `/status` - Returns a status message indicating the server is running
- GET `/html` - Returns a simple HTML string
- GET `/api` - Returns a JSON object with user details
- GET `/json` - Returns a JSON object with a message
- GET `/error` - Simulates an internal server error with a simple string message
- GET `/error-html` - Simulates an internal server error with an HTML message
- GET `/error-json` - Simulates an internal server error with a JSON message
- GET `/github/:id` - Fetches and returns data from a GitHub user's profile. The GitHub username is provided as a route parameter. You must replace `:id` with a valid GitHub username
- GET `/github/:id/img` - Fetches and returns the avatar image of a GitHub user. The GitHub username is provided as a route parameter. You must replace `:id` with a valid GitHub username
- GET `/cat` - Fetches and returns an image of a cat from TheCatAPI
- GET `/dog` - Fetches and returns an image of a dog from TheDogAPI
- GET `/joke` - Returns a random joke in HTML format.
- GET `/fact` - Returns a random fact in HTML format.
- GET `/quote` - Returns a random quote in HTML format.
- GET `/weather` - Returns the current temperature and wind speed for a specific location in HTML format.
- GET `/meme` - Returns a random meme in HTML format.
- GET `/advice` - Returns a random advice in HTML format.
- GET `/activity` - Returns a random activity in HTML format.

### How to run the app:
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
4. Visit `http://localhost:3000` in your browser to view the app

### Author
- [Jeet Majumdar](https://github.com/JeetMajumdar2003)
- [LinkedIn](https://www.linkedin.com/in/jeet-majumdar648/)
- [Twitter](https://twitter.com/jeetmX025)

### License
This project is open source and available under the [ISC License]

### Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Hitesh Choudhary](https://github.com/hiteshchoudhary)