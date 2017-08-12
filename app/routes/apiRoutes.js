const express = require('express');
const router = express.Router();
const path = require('path');
const friendsList = require('../data/friends');

router.post('/api/friends', (req, res) => {
  console.log(' WHAT IS OUR BODY', req.body);

  let newFriend = req.body;
  let results = [];
  for(var i =0; i < friendsList.length; i +=1) {
    var totalDifference = 0;
    var scores = friendsList[i].scores.length

    for(var j = 0; j < 2; j +=1) {
      totalDifference +=  Math.abs(friendsList[i].scores[j] - newFriend.scores[j])

    }
    results.push(totalDifference)
  }
  let bffIndex = Math.min.apply(null, results);
  let match = results.indexOf(bffIndex);
  let bff = friendsList[match]
  res.json(bff);
});
router.get('/api/friends', (req, res) => {
  res.json(friendsList)
})
module.exports = router;
