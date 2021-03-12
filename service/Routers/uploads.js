const express = require("express");
const multer = require("multer");

// directly taken from Jason's sample repo and adapted from resources
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../service/resources/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });
  
const upload = multer({ storage: storage });
const router = express.Router();

router.route("/")
    .post(upload.single("image"), (req, res, next) => {
        try {
            const image = req.file;
            if (!image) {
                res
                    .status(400)
                    .send({ error: "no file selected" });
            } else {
                res
                    .status(200)
                    .send({ message: "photo uploaded" });
              }
        } catch (err) {
            next(err);
        }
    });

module.exports = router;
