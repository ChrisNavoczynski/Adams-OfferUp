const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

require("dotenv").config({ path: `${__dirname}/../.env` });
const domain = process.env.AUTH_0_DOMAIN;
const audience = process.env.AUTH_0_AUDIENCE;

const { getMessages,
        getMessage,
        createMessage,
        updateMessage,
        deleteMessage
     } = require("../controllers/messages");

const checkJwt = jwt({
     secret: jwksRsa.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${domain}/.well-known/jwks.json`,
     }),
     audience: `${audience}`,
     issuer: `https://${domain}/`,
     algorithm: ["RS256"]
});

router.use(checkJwt);

router
    .route("/")
    .get(getMessages)
    .post(createMessage);

router
     .route("/:id")
     .get(getMessage)
     .put(updateMessage)
     .delete(deleteMessage);

module.exports = router;
