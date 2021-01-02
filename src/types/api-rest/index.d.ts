import { BuildOptions, Model } from "sequelize";

export interface ArticleAttributes {
  id: number;
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface ArticleModel extends Model<ArticleAttributes>, ArticleAttributes {}
export class Article extends Model<ArticlesModel, ArticleAttributes> {}
export type ArticleStatic = typeof Model & {
   new (values?: object, options?: BuildOptions): ArticleModel;
};

export interface CommentAttributes {
	id: number;
	text: string;
	createdAt?: Date;
	updatedAt?: Date;
  }
  export interface CommentModel extends Model<CommentAttributes>, CommentAttributes {}
  export class Comment extends Model<CommentModel, CommentAttributes> {}
  export type CommentStatic = typeof Model & {
	 new (values?: object, options?: BuildOptions): CommentModel;
  };
 