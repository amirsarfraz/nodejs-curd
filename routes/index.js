var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");

const localStrategy = require("passport-local");
// passport.use(new localStrategy(userModel.authenticate()));
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
// router.get("/", function (req, res) {
//   res.cookie("age", 27);
//   req.session.ban = true;
//   res.render("index", { title: "Express" });
// });
// router.get("/create", async function (req, res) {
//   const createdUser = await userModel.create({
//     userName: "amirssssssss",
//     age: 27,
//     name: "as",
//   });
//   res.send(createdUser);
// });
// router.get("/allusers", async function (req, res) {
//   let allusers = await userModel.find();
//   res.send(allusers);
// });
// router.get("/read", function (req, res) {
//   console.log(req.cookies.age);
//   res.send("check");
// });
// router.get("/checkban", async function (req, res) {
//   if (req.session.ban === true) {
//     res.send("you are banned");
//   } else {
//     res.send("not banned");
//   }
//   let allusers = await userModel.find();
//   res.send(allusers);
// });
// router.get("/fail", function (req, res) {
//   req.flash("amir", 27);
//   res.send("aaaaaa");
// });
// router.get("/checkraro", function (req, res) {
//   console.log(req.flash("amir", 27));
//   res.send("check in terminal");
// });
// router.get("/create", async function (req, res) {
//   let userData = await userModel.create({
//     userName: "amirDDDDDDDDDDDDDDDDD",
//     name: "123",
//     age: 26,
//     category: ["team", "led", "scince"],
//   });
//   res.send(userData);
// });

// router.get("/find", async function (req, res) {
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         {
//           $gte: [{ $strLenCP: "category" }, 0],
//         },
//         {
//           $lte: [{ $strLenCP: "category" }, 1],
//         },
//       ],
//     },
//   });
//   res.send(user);
// });
router.get('/'),function(req, res){
  res.render('index')
};
router.post('/register', function(req, res){
  
})
module.exports = router;
