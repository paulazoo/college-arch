import React from 'react';
import { Button } from '@material-ui/core';
import { PayPalButton } from 'react-paypal-button-v2';

import Swal from 'sweetalert2';

function PaypalDonate({ donateAmount }) {
  const handleSuccess = (details, data) => {
    console.log(details, data);
    Swal.fire({
      title: 'THANK YOU',
      text:
        'College ARCH (Application Resources for College and Higher-education) is able to help kids because of people like you. 💞 From the team here at College ARCH, thank you!',
    });
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
      <Button onClick={() => handleSuccess('dtails', 'data')}>Simulate</Button>
    </>
  );
}
export default PaypalDonate;
