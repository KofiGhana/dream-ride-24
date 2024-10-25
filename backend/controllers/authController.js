const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });

  await user.save();

  res.json({ message: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'User logged in successfully' });
};
