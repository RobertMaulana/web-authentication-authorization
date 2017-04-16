const express = require('express');
const hash = require('password-hash');
const db = require('../models/user_model');

let createUser = (req, res) => {
  db.create({
    email:  req.body.email,
    password: hash.generate(req.body.password)
  }, (err, data) => {
    if (!err) {
      res.send(data);
    }else {
      res.send(err.message);
    }
  })
}

let loginUser = (req, res) => {
  let data = {
    token: req.user.token,
    welcome: "Welcome to Web Api Auth"
  }
  res.send(data);
}

let getUser = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }else {
      res.send(err.message)
    }
  })
}

let updateUser = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        email: req.body.email,
        password: hash.generate(req.body.password)
      }
    }, (err, result) => {
      res.send(`Data user with id ${req.params.id} has been update!`)
    }
  )
}

let removeUser = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data user with id ${req.params.id} has been delete!`)
    }
  })
}

module.exports = {
  createUser, loginUser, getUser, updateUser, removeUser
}
