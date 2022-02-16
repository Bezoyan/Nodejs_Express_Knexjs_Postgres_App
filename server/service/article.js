const articleDAO = require('../dao/article');

class ArticleService {
    createArticle(articleDto) {
        const { heading, content } = articleDto;
        return articleDAO.createArticle(heading, content);
    }
}

module.exports = new ArticleService();