const express = require('express');
const router = express.Router();

// Mock usage data
const usageData = {
  user: 'userId',
  metrics: {
    storage: '100GB',
    requests: 5000,
  },
};

router.get('/usage', (req, res) => {
  res.json(usageData);
});

module.exports = router;
