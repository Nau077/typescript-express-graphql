import { DataTypes, Sequelize } from 'sequelize';
import { ArticleStatic } from '../types/api-rest';

export function ArticleFactory (sequelize: Sequelize): ArticleStatic {
    return <ArticleStatic>sequelize.define("skills", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        skill: {
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