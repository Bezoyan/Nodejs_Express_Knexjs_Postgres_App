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

    async getAllArticles(req, res) {
        try {
            const articles = await articleService.getAllArticles(res);
            res.status(200).json(articles);
        } catch (err) {
            res.status(404).json('Not found');
        }
    }

    async getArticle(req, res) {
        try {
            const [article] = await articleService.getArticle(req.params.id);
            res.status(200).json(article);
        } catch (err) {
            res.status(404).json('No such artice with this id');
        }
    }
}

module.exports = new ArticleController;