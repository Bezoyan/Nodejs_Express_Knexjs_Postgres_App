const dbConnection = require('../db/db');
const ErrorMessage = require('../enums/errors');

class ArticleDAO {
    async createArticle(heading, content) {
        try {
            const [newArticle] = await dbConnection('articles')
                .insert({
                    heading: heading,
                    content: content,
                    created_at: new Date(),
                    updated_at: new Date()
                })
                .returning('*');
            return newArticle;
        } catch(e) {
              return ErrorMessage.CREATE_DATA_ERROR;
        }
    }

    async getAllArticles() {
      try {
          const articles = await dbConnection('articles');
          return articles;
      } catch {
            return ErrorMessage.GET_DATA_ERROR;
      }
    }

    async getArticle(articleId) {
      try {
          const article = await dbConnection
              .select('*')
              .from('articles')
              .where('id', '=', articleId);
          return article;

      } catch {
        return ErrorMessage.GET_DATA_ERROR;
      }
    }

    async deleteArticle(articleId) {
        try {
            return await dbConnection('articles')
                .where('id', '=', articleId)
                .del()
          } catch (e) {
                return ErrorMessage.DELETE_DATA_ERROR;
          }
    }

    async updateArticle(articleId, updateArticle){
        try {
            return await dbConnection('articles')
                .where('id', '=', articleId)
                .update({
                    ...updateArticle,
                    updated_at: new Date(),
                })
                .returning([
                    'id',
                    'heading',
                    'content',
                ])
        } catch (e) {
              return ErrorMessage.UPDATE_DATA_ERROR;
        }
      }
}

module.exports = new ArticleDAO();