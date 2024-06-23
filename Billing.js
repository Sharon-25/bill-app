import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Billing() {
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    const fetchBilling = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/billing');
        setBilling(response.data);
      } catch (error) {
        console.error('Error fetching billing data:', error);
      }
    };

    fetchBilling();
  }, []);

  const generateInvoice = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/billing/invoice');
      console.log('Invoice generated:', response.data);
    } catch (error) {
      console.error('Error generating invoice:', error);
    }
  };

  return (
    <div>
      <h2>Billing Information</h2>
      {billing ? (
        <div>
          <p>Current Cycle: {billing.currentCycle}</p>
          <p>Usage: {billing.cumulativeUsage.storage} storage, {billing.cumulativeUsage.requests} requests</p>
          <p>Amount: ${billing.amount}</p>
          <button onClick={generateInvoice}>Generate Invoice</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Billing;
