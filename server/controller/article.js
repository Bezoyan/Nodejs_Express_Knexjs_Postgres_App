const articleService = require('../service/article');
const ErrorMessage = require('../enums/errors');
const HttpStatus = require('../enums/httpStatus');

class ArticleController {
    async createArticle(req, res) {
        try {
            const newArticle = await articleService.createArticle(req.body);
            res.status(HttpStatus.CREATED).json(newArticle);
        } catch (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllArticles(req, res) {
        try {
            const articles = await articleService.getAllArticles(res);
            res.status(HttpStatus.OK).json(articles);
        } catch (err) {
            return res.status(HttpStatus.NOT_FOUND)
        }
    }

    async getArticle(req, res) {
        try {
            const [article] = await articleService.getArticle(req.params.id);
            if (!article) {
                throw new Error (ErrorMessage.NOT_FOUND_ERROR);
            }
            res.status(HttpStatus.OK).json(article);
        } catch (err) {
            return res
            .status(HttpStatus.NOT_FOUND)
            .json({ msg: ErrorMessage.NOT_FOUND_ERROR });
        }
    }

    async deleteArticle(req, res) {
        try {
            const articleId = req.params.id;
            const [article] = await articleService.getArticle(articleId);
            if (!article) {
                throw new Error (ErrorMessage.NOT_FOUND_ERROR);
            }
            await articleService.deleteArticle(articleId);
            return res
                .status(HttpStatus.OK)
                .json({ msg: 'Article was deleted' });
        } catch (err) {
            return res
                .status(HttpStatus.NOT_FOUND)
                .json({ msg: ErrorMessage.NOT_FOUND_ERROR });
        }
    }

    async updateArticle(req, res) {
        const {
            body,
            params: {
                id,
            },
        } = req;
        try {
            const [article] = await articleService.getArticle(id);
            if (!article) {
                throw new Error(ErrorMessage.NOT_FOUND_ERROR);
            }
            return res
                .status(HttpStatus.OK)
                .send(await articleService.updateArticle(id, body));
        } catch (err) {
              return res
                  .status(HttpStatus.NOT_FOUND)
                  .json({ msg: ErrorMessage.NOT_FOUND_ERROR });
        }
    }
}

module.exports = new ArticleController;