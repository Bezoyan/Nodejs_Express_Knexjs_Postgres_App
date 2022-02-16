const express = require('express');

const articleController = require('../controller/article');

const router = express.Router();
router.post('/article', articleController.createArticle);

module.exports = router;