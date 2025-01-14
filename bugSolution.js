const express = require('express');
const app = express();
// Add this middleware to parse JSON bodies
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data
  console.log(data); //Now this will log the data correctly.
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});