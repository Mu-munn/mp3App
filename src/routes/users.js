var express = require("express");
var router = express.Router();

const testObjData = {
  textObject1: {
    title: "Objectのタイトル1です",
    subTitle: "Objectのサブタイトル1です",
    bodyText: "Objectの本文1です",
  },
  textObject2: {
    title: "Objectのタイトル2です",
    subTitle: "Objectのサブタイトル2です",
    bodyText: "Objectの本文2です",
  },
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(testObjData);
});

module.exports = router;
