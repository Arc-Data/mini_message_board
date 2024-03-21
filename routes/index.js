var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Ideally, I might have wanted this to automatically scroll down to the latest message and like not render all of it, but I imagine thats a React job for now? I mean this doesn't have an actual database to work with, yet, not to mention, this isn't a React project. This is just Pug.",
    user: "Arc",
    added: new Date()
  },
  {
    text: "I imagine in React, that you really only wanna get the first twenty messages or so but the current mystery right now is that the scroll should be at the very bottom right at the start",
    user: "Arc",
    added: new Date()
  },
  {
    text: "My current theory would be that the items are rendered in reverse order starting from the recent (bottommost) up to the top. And when it reaches the top, it sends a request for further messages.",
    user: "Arc",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })

  res.redirect('/')
}) 

module.exports = router;
