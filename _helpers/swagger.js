const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggyaml = require('yamljs');

const swaggerDocument = swaggyaml.load('./swagger.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;