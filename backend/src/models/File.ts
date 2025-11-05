import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import type { FileModel } from "../types/index.js";

const File = sequelize.define<FileModel>(
  "File",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originalname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uploaded_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "files",
    timestamps: true,
    createdAt: "uploaded_at",
    updatedAt: false,
  }
);

export default File;
