const express = require("express");

const admins = ["Ada", "Greta", "Vim", "Tim"];

function authUser(req, res, next) {
  const user = req.query.user;
  if (admins.includes(user)) {
    next();
  } else {
    res.send("No tienes los privilegios para ingresar");
  }
}

module.exports = authUser;
