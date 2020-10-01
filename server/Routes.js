const router = require('express').Router();
const fs = require('fs').promises;

router.post('/login', async (req, res) => {
  const userList = await fs.readFile('userList.json')
  console.log(JSON.parse(userList))
})

module.exports = router;