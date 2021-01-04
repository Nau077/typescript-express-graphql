const _ = require('lodash');
import comments  from '../controllers/comments'
import articles  from '../controllers/articles'

const Articles = articles.getAllArticles();
const Comments = comments.getAllComments();

let {
    // Здесь базовые типы GraphQL, которые нужны в этом уроке
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    /* Это необходимо для создания требований
       к полям и аргументам */
    GraphQLNonNull,
    // Этот класс нам нужен для создания схемы
    GraphQLSchema
} = require('graphql');

const ArticleType = new GraphQLObjectType({
    name: "Articles",
    description: "This represent an Articles",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt)},
        text: { type: new GraphQLNonNull(GraphQLString)},
        updatedAt: {type: GraphQLString},
        createdAt: {type: GraphQLString},
    })
});

const CommentType = new GraphQLObjectType({
    name: "Comment",
    description: "This represent Comment",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        text: {type: new GraphQLNonNull(GraphQLString)},
        updatedAt: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        articles_id_fkey: {type: new GraphQLNonNull(GraphQLInt)},
        // author: {
        //     type: CommentType,
        //     resolve: function(comment:any) {
        //         return _.find(Comments, (a:any) => a.id == comment.author_id);
        //     }
        // }
    })
});

const BlogQueryRootType = new GraphQLObjectType({
    name: "BlogAppSchema",
    description: "Blog Application Schema Query Root",
    fields: () => ({
        articles: {
            type: new GraphQLList(ArticleType),
            description: "List of all Articles",
            resolve: function() {
                return Articles
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            description: "List of all Comments",
            resolve: function() {
                return Comments
            }
        }
    })
});

const BlogAppSchema = new GraphQLSchema({
    query: BlogQueryRootType
    /* Если вам понадобиться создать или 
       обновить данные, вы должны использовать
       мутации. 
       mutation: BlogMutationRootType
    */
});

module.exports = BlogAppSchema;