import React from 'react';
import { Button } from '@material-ui/core';
import { PayPalButton } from 'react-paypal-button-v2';

function PaypalDonate({ donateAmount }) {
  const handleSuccess = (details, data) => {
    console.log(details, data);
  };

  return (
    <>
      <PayPalButton
        amount={donateAmount}
        currency='USD'
        onSuccess={(details, data) => handleSuccess(details, data)}
        options={{
          clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        }}
      />
      <Button onClick={handleSuccess('dtails', 'data')}>Simulate</Button>
    </>
  );
}
export default PaypalDonate;
