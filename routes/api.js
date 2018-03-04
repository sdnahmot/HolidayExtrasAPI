var express = require('express');
var router = express.Router();

var users = [
  {
    "user_id": "0",
    "user_email": "john.lennon@outlook.com",
    "user_first_name": "John",
    "user_surname": "Lennon",
    "user_DOB": "09.10.1940",
    "user_created": "01.03.2018"
  },
  {
    "user_id": "1",
    "user_email": "paul.mccartney@gmail.com",
    "user_first_name": "Paul",
    "user_surname": "McCartney",
    "user_DOB": "18.06.1942",
    "user_created": "01.03.2018"
  },
  {
    "user_id": "2",
    "user_email": "georgeharrison@yahoo.com",
    "user_first_name": "George",
    "user_surname": "Harrison",
    "user_DOB": "25.02.1943",
    "user_created": "01.03.2018"
  },
  {
    "user_id": "3",
    "user_email": "ringo.starr@aol.com",
    "user_first_name": "Ringo",
    "user_surname": "Starr",
    "user_DOB": "07.07.1940",
    "user_created": "01.03.2018"
  },
];

/* GET all users */
router.get('/users/', function(req, res, next) {
  res.json(users);
});

/* PUT replace all users */
router.put('/users/', function(req, res, next) {
  console.log(req.body);
  users = req.body;
  res.json({"STATUS": "200 OK"});
});

/* POST create a new user */
router.post('/users/', function(req, res, next) {
  users.push(req.body)
  res.json({"STATUS": "200 OK"});
});

/* DELETE the entire user collection */
router.delete('/users/', function(req, res, next) {
  users = [];
  res.json({"STATUS": "200 OK"});
});


/* GET a specific user */
router.get('/users/:id', function(req, res, next) {
  var i = 0;
  var user = null;
  for(i = 0; i != users.length; i++){
    if(users[i].user_id == req.params.id){
      user = users[i];
      break;
    }
  }
  user !== null ? res.json(user) : res.json({"STATUS": "404 NOT FOUND - The user you are looking for cannot be located"})
});

/* PUT replace a specific user with another user */
router.put('/users/:id', function(req, res, next) {
  var i = 0;
  var user = null;
  for(i = 0; i != users.length; i++){
    if(users[i].user_id == req.params.id){
      user = users[i];
      break;
    }
  }
  if(user !== null){
    user.user_email = req.body['user_email']
    res.json({"STATUS": "200 OK"});
  } else {
    res.json({"STATUS": "404 NOT FOUND - The user you are looking for cannot be located"});
  }
});

/* DELETE a specific user from the collection */
router.delete('/users/:id', function(req, res, next) {
  var i = 0;
  for(i = 0; i != users.length; i++){
    if(users[i].user_id == req.params.id){
      users.splice(i, 0);
      return res.json({"STATUS": "200 OK"});
    }
  }
  return res.json({"STATUS": "404 NOT FOUND - The user you are looking for cannot be located"});
});


module.exports = router;