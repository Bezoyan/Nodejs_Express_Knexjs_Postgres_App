const express = require('express');

const articleController = require('../controller/article');

const router = express.Router();
router.post('/article', articleController.createArticle);
router.get('/articles', articleController.getArticles);

module.exports = router;