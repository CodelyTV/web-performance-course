/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const IMAGES = "src/assets/images";
const CLOUDINARY_FOLDER = "CodelyTv";

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const isImageFile = /\.(gif|jpe?g|png|tif?f|webp|avif|jcl|svg)$/i.test(
      file
    );

    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles);
    } else {
      if (isImageFile) {
        arrayOfFiles.push(`${dirPath}/${file}`);
      }
    }
  });

  return arrayOfFiles;
};

getAllFiles(IMAGES).forEach((file) => {
  const publicId = file.split(".").slice(0, -1).join(".");
  // console.log(publicId);
  cloudinary.uploader
    .upload(file, {
      folder: CLOUDINARY_FOLDER,
      public_id: publicId,
    })
    .then((uploadResult) => console.log(uploadResult))
    .catch((error) => console.error(error));
});

// console.log(getAllFiles(IMAGES));
