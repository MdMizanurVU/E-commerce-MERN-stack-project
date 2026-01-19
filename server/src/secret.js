require("dotenv").config({ path: "./src/.env" });

const serverPort = process.env.SERVER_PORT || 3002;
const mongoDBAtlasURL =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceMernDB";

const defaultUserImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH ||
  "server/public/images/users/defaultimage.webp";

module.exports = {
  serverPort,
  mongoDBAtlasURL,
  defaultUserImagePath,
};
