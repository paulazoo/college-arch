/* eslint-disable no-console */
// Template for components
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme

// Custom Components

function PaypalDonate(props) {
  const [checkout, setCheckout] = useState(false);

  const handlePaypalClick = () => {
    setCheckout(true);
  };

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'College ARCH Donation',
                amount: {
                  currency_code: 'USD',
                  value: 10.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return checkout ? (
    <>
      <div>
        <div ref={paypal} />
      </div>
    </>
  ) : (
    <>
      <p>plsss give us monies bc we are pooor</p>
      <Button onClick={handlePaypalClick}>Donate</Button>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PaypalDonate);
