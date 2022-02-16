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

    async getArticles() {
        const articles = await dbConnection('articles');
        return articles;
    }
}

module.exports = new ArticleDAO();