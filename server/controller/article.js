const articleService = require('../service/article');

class ArticleController {
    async createArticle(req, res) {
        try {
            const newArticle = await articleService.createArticle(req.body);
            res.status(201).json(newArticle);
        } catch (err) {
            res.status(500).json('Something went wrong');
        }
    }

    async getArticles(req, res) {
        try {
            const articles = await articleService.getArticles(res);
            res.status(200).json({articles});
        } catch (err) {
            res.status(404).json('Not found');
        }
    }
}

module.exports = new ArticleController;