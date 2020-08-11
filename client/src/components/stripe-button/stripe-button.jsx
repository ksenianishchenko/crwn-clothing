import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51HEfG1H24wDCsAerC1EkCtPhZXCs0YnvPhKjuFvM69xU0elMyR2Z8veJkxgqQ1Y2rzd19AEqOPZFEEM4yT0QwnEP00SXTg5pQf';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(res => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert('There was problem with payment');
    })
  }
  return (
    <StripeCheckout
      label = 'Pay now'
      name = 'CRWN Clothing Ltd.'
      billingAdress
      shippingAddress
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay now'
      token = {onToken}
      stripeKey={publishKey}
    />
  )
};

export default StripCheckoutButton;
