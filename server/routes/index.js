const express = require('express');

const articleController = require('../controller/article');

const router = express.Router();
router.post('/article', articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.get('/article/:id', articleController.getArticle);
router.delete('/article/:id', articleController.deleteArticle);
router.put('/article/:id', articleController.updateArticle);

module.exports = router;