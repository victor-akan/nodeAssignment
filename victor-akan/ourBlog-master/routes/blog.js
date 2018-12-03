var express = require("express");
var router = express.Router();
//declare array
let blogArr = []; 
let id = 1; 

//http methods//
router.get("/", function(req, res, next) {
  res.send("Blog Api");
});

router.post("/create", function(req, res, next) {

  //pass req.body a variable name
  let body = req.body; 
  body.id = id;
  id += 1;
  blogArr.push(body);
  console.log(blogArr);
  res.send("Post created");
});

router.get("/read/:id", function(req, res, next) {
  let blogId = req.params.id;
  let output = blogArr.find(item => item.id == blogId);
  res.send(output);
});

router.put("/update/:id", function(req, res, next) {
  let blogId = req.params.id;
  blogArr[blogId - 1] = req.body;
  console.log(`Post updated at id: ${blogId}`);
  res.send(req.body);
});

router.delete("/delete/:id", function(req, res, next) {
  let blogId = req.params.id;
  //index to delete from would be one less than value of id
  blogArr.splice(blogId-1, 1);
  res.send("You have deleted");
});

router.get("/all", function(req, res, next) {
  res.send(blogArr);
});

module.exports = router;
