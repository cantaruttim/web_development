const express = require('express');
const router = express.Router();

// const db = require('../models');
const { Posts } = require('../models')

router.get("/", async (req, res) => {

    const listOfPosts = await Posts.findAll();
    return res.json(listOfPosts);
    // res.json('Buscando os Posts ... ')
});

router.post("/", async (req, res) => {
    try {
        const post = req.body;
        const createdPost = await Posts.create(post);
        res.json(createdPost);
    } catch (error) {
        res.status(400).json({
            error: "Erro ao criar post",
            detalhes: error.errors.map(err => err.message)
        });
    }
});

module.exports = router;