const express = require("express");
const router = express.Router();
const CarData = require("./CarData");
const EstimateCarValue = require("./EstimateCarValue");

router.get("/", (req, res) => {
  const result = CarData.map((car) => EstimateCarValue(car.make, car.year));
  res.send(result);
});

module.exports = router;
