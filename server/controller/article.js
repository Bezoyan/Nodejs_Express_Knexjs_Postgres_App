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
}

module.exports = new ArticleController;