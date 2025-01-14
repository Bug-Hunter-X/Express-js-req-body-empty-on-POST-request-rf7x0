# Express.js req.body empty on POST request

This repository demonstrates a common issue in Express.js applications where the `req.body` object is empty when receiving POST requests, even though the server appears to be running correctly.  The problem stems from a missing or incorrectly configured body-parsing middleware.

## Bug

The `bug.js` file contains the faulty Express.js server code.  POST requests to the `/data` endpoint will result in an empty `req.body`.

## Solution

The `bugSolution.js` file provides the corrected code. The `express.json()` middleware is added to properly parse JSON data from incoming requests. 

## How to reproduce the bug

1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/data` with JSON data in the body. For example using curl: `curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' http://localhost:3000/data`
6. Observe that the server responds, but `req.body` is empty.

## How to fix the bug

1. Follow the solution in `bugSolution.js`. Add `app.use(express.json());` before the route handler.
2. Restart the server.
3. Send the POST request again. Now `req.body` should contain the correct data.
