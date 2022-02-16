const dbConnection =  require('../db/db');

class ArticleDAO {
    async createArticle(heading, content) {
        const [newArticle] = await dbConnection('articles')
            .insert({
                heading: heading,
                content: content,
                created_at: new Date(),
                updated_at: new Date()
            })
            .returning('*');
        return newArticle;
    }

    async getAllArticles() {
        const articles = await dbConnection('articles');
        return articles;
    }

    async getArticle(articleId) {
        const article = await dbConnection.select('*')
            .from('articles')
            .where('id', '=', articleId);
        return article;
    }
}

module.exports = new ArticleDAO();