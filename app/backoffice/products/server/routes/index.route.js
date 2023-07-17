const express = require("express");
const { getClientCatalog } = require("../controllers/catalog.controller.js")

const router = express.Router();

// Routes * /products/*
router.get("/catalog", getClientCatalog);

module.exports = router;