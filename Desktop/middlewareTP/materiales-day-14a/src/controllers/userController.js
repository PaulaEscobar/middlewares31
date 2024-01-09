const userController = {
  admin: (req, res) => {
    res.send("Hola admin: " + req.query.user);
  },
};

module.exports = userController;
