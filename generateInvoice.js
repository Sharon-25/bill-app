const generateInvoice = (billingData) => {
    // Generate invoice based on billing data
    return {
      invoiceId: 'INV-1001',
      date: new Date().toISOString(),
      ...billingData,
    };
  };
  
  module.exports = { generateInvoice };
  