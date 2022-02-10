const express = require('express');
const db = require('../configs/dbConfig')
const articleRouter = express.Router();

articleRouter.route('/articles')
    .get(async (request, response) => {
        const result = await db
        .select('heading')
        .from('articles')
            response.json({
            articles: result
        });
    });

articleRouter.route('/all')
    .get(async (request, response) => {
        const articles = await knex('articles')
        response.json({articles});
    });

module.exports = articleRouter;