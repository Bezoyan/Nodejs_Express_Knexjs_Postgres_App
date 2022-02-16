const express = require('express');

const articleController = require('../controller/article');

const router = express.Router();
router.post('/article', articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.get('/article/:id', articleController.getArticle);

module.exports = router;