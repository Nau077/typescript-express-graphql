import { DataTypes, Sequelize } from 'sequelize';
import { ArticleStatic } from '../types/api-rest';

export function ArticleFactory (sequelize: Sequelize): ArticleStatic {
    return <ArticleStatic>sequelize.define("articles", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}