const router = require('express').Router();
const fs = require('fs').promises;

router.post('/login', async (req, res) => {
  const buffer = await fs.readFile('userList.json');
  const userList = JSON.parse(buffer);
  const candidate = userList.users.find(el => el.name === req.body.name);
  if (!candidate) {
    return res.status(401).json({ message: 'user not found'});
  }
  res.status(200).json({ name: candidate.name });
})

module.exports = router;