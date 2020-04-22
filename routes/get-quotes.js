const express = require('express');
const quotesRouter = express.Router();

const { quotes } = require('../data.js');
const { getRandomElement } = require('../utils');



//handle requests to GET all quotes
quotesRouter.get('/', (req, res, next) => {
    if (!req.query.hasOwnProperty('person')) {
        console.log({quotes:quotes})
        res.send({quotes: quotes});
      } else {
        const filterQuote = quotes.filter(element => element.person === req.query.person);
        console.log({quotes: filterQuote})
        res.send({quotes: filterQuote});
      }

})

//handle requests to GET a random quote
quotesRouter.get('/random', (req, res, next) => {
      const quote = getRandomElement(quotes);
      console.log({quote});
      res.status(200).send({quote});
      
})

//handle requests to POST a new quote
quotesRouter.post('/', (req, res, next) => {
    const quoteToAdd = req.query;
    if (quoteToAdd.quote && quoteToAdd.person) {
        quotes.push(quoteToAdd);
        console.log(quotes);
        res.status(401).send({quote: quoteToAdd});
    } else {
        res.status(400);
    }  
})

module.exports = quotesRouter;