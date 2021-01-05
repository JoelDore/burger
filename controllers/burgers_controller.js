const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

// Redirect to index
router.get('/', (req, res) => {
    res.redirect('/index')
})

// View All (onload)
router.get('/index', (req, res) => {
    burger.viewBurgers(data => {
        console.table(data)
        res.render('index', { data })
    })
})

// Add Burger (submit click)
router.post('/index/add', (req, res) => {
    burger.addBurger(req.body.burgerName, response => {
        console.log(response)
        res.redirect('/index')
    })
})

// Devour (devour click)
router.put('/index/devour/:id', (req, res) => {
    burger.devourBurger(req.params.id, response => {
        console.log(response)
        res.redirect('/index')
    })
})

module.exports = router