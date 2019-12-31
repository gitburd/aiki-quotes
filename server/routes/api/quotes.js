const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get quotes

router.get('/', async(req, res) => {
    const quotes = await loadQuotesCollenction();
    res.send(await quotes.find({}).toArray());
})

// get random

router.get('/random', async(req, res) => {
    const quotes = await loadQuotesCollenction();
    res.send(await quotes.aggregate([{$sample: {size: 1}}]).toArray());
})

// search

router.get('/search/:search', async(req, res) => {
    console.log("in search")
    const quotes = await loadQuotesCollenction();
    res.send(await quotes.find({ki:`${req.params.search}`}).toArray());
})

// // add quotes
router.post('/', async(req, res) => {
    const quotes = await loadQuotesCollenction()
    await quotes.insertOne({
        text:req.body.text,
        ki:req.body.ki
    });
    res.status(201).send();
})

// // delete quotes

router.delete('/:id', async(req, res) => {
    const quotes = await loadQuotesCollenction();
    await quotes.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadQuotesCollenction(){
    const client = await mongodb.MongoClient.connect(
        'myConnectionString', {useNewUrlParser:true}
    );
    return client.db('aikido').collection('quotes');
}

module.exports = router;
