const articleDAO = require('../dao/article');

class ArticleService {
    createArticle(articleDto) {
        const { heading, content } = articleDto;
        return articleDAO.createArticle(heading, content);
    }

    getArticles() {
        return articleDAO.getArticles();
    }

    getArticle(articleId) {
        return articleDAO.getArticle(articleId);
    }
}

module.exports = new ArticleService();