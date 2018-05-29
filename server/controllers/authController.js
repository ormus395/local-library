module.exports = {
  login: (req, res) => {
    res.send("Logged in");
  },
  logout: (req, res) => {
    req.logout();
    res.send("logged out");
  }
};
