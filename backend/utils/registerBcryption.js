const bcrypt = require('bcryptjs');

const registerBcryption = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
module.exports = registerBcryption;
