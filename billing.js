const express = require('express');
const { generateInvoice } = require('../utils/generateInvoice');
const router = express.Router();

// Mock billing data
const billingData = {
  user: 'userId',
  currentCycle: 'June 2024',
  cumulativeUsage: {
    storage: '100GB',
    requests: 5000,
  },
  amount: 50.00,
};

router.get('/billing', (req, res) => {
  res.json(billingData);
});

router.get('/billing/invoice', (req, res) => {
  const invoice = generateInvoice(billingData);
  res.json(invoice);
});

module.exports = router;
