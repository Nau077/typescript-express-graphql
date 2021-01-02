import { DataTypes, Sequelize } from 'sequelize';
import { CommentStatic } from '../types/api-rest';

export function CommentFactory (sequelize: Sequelize): CommentStatic {
    return <CommentStatic>sequelize.define("comments", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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