const register = (req, res) => {
  const { email, password, name } = req.body;
  console.log(req.body);
};
const login = (req, res) => {
  res.send('login');
};
module.exports = {
  login,
  register,
};
