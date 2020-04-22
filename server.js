const express = require('express');
const app = express();
const quotesRoute = require('./routes/get-quotes.js')

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api/quotes', quotesRoute);

app.listen(PORT, () => {
    console.log(`You server is running on port ${PORT}`)
});

