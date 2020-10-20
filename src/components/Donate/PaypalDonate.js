import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

class PaypalDonate extends React.Component {
  render() {
    return (
      <PayPalButton
        amount={0.01}
        currency='USD'
        onSuccess={(details, data) => console.log(details, data)}
        options={{
          clientId:
            'AQulV7aFCM-Ki5udsLsyCpAS6X76uyx2XKh-NXo9Tk25wBU3UHa6fovT6FKINDZ6xPOYTHZs2HQaA0H5',
        }}
      />
    );
  }
}
export default PaypalDonate;
