const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "../resources/images"});
const router = express.Router();

router.route("/")
    .post(upload.array("productImages", 6), (req, res, next) => {
        try {
            const images = req.files;
            if (!images) {
                res
                    .status(400)
                    .send({ error: "no file selected" });
            } else {
                res.send({ message: "success" });
            }
        } catch (err) {
            next(err);
        }
    });

module.exports = router;
