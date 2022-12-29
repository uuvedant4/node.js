const path = require("path");

const getForm = (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
};

const registerUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPassword,
  });
};

module.exports = { getForm, registerUser };
