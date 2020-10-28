import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

function PaypalDonate({ donateAmount }) {
  return (
    <PayPalButton
      amount={donateAmount}
      currency='USD'
      onSuccess={(details, data) => console.log(details, data)}
      options={{
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    />
  );
}
export default PaypalDonate;
