const articleDAO = require('../dao/article');

class ArticleService {
    createArticle(articleDto) {
        const { heading, content } = articleDto;
        return articleDAO.createArticle(heading, content);
    }

    getArticles() {
        const data = articleDAO.getArticles();
        return data;
    }
}

module.exports = new ArticleService();