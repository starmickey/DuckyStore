const express = require("express");
const { getClientCatalog } = require("../controllers/catalog.controller.js")
const { searchProduct } = require('../controllers/search.controller.js')

const router = express.Router();

// Routes * /products/*
router.get("/catalog", getClientCatalog);
router.get('/search', searchProduct);

module.exports = router;