const _ = require('lodash');

// Authors и Posts получают данные в виде
// JSON массивов с соответствующих файлов
const Articles = require('../routes/articles');
const Comments = require('../routes/comments');

let {
    // Здесь базовые типы GraphQL, которые нужны в этом уроке
    GraphQLString,
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
        id: { type: new GraphQLNonNull(GraphQLString)},
        text: { type: new GraphQLNonNull(GraphQLString)},
        // twitterHandler: {type: GraphQLString}
    })
});

const CommentType = new GraphQLObjectType({
    name: "Comment",
    description: "This represent Comment",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        text: {type: new GraphQLNonNull(GraphQLString)},
        // body: {type: GraphQLString},
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
       Мутации не будут изучены в этом посте.
       mutation: BlogMutationRootType
    */
});

module.exports = BlogAppSchema;