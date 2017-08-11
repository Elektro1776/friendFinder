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
    // console.log('WHAT IS OUR FRIENDS LIST',scores);

    for(var j = 0; j < 2; j +=1) {
      // console.log(' WHAT IS OUR VALUES TO COMPARE', friendsList[i].scores[j], "New friend", newFriend.scores[j]);
      totalDifference +=  Math.abs(friendsList[i].scores[j] - newFriend.scores[j])
      // console.log(' WHAT IS OUR FRIEND score', friendsList[i].scores[j]);
      // console.log(' WHAT IS OUR NEW FRIEND SCORE', newFriend.scores[j]);
      // console.log(' WHAT IS OUR TOTAL AS WE COMPARE', Math.abs(friendsList[i].scores[j] - newFriend.scores[j]));
      // console.log("this is the compared values",  totalDifference);

    }
    results.push(totalDifference)
  }
  // console.log(' WHAT ARE THE RESULTS ???', results);
  let bffIndex = Math.min.apply(null, results);
  let match = results.indexOf(bffIndex);
  console.log('What is our total resuLTS', match, results);
  console.log(' WHAT IS OUR BFF INDEX', friendsList[match]);
  let bff = friendsList[match]
  // res.sendFile(path.join(__dirname, '../public/survey.html'));
  // res.sendStatus(200);
  res.json(bff);
})
module.exports = router;
