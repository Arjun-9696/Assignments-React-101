import React from 'react';
import PaymentCard from './PaymentCard/PaymentCard';
import amazonLogo from '../icons/amazon.png';
import appleLogo from '../icons/Apple-logo.png';
const PaymentProp = () => {
  return (
    <>
      <PaymentCard
        date="28/10/2020"
        logo={amazonLogo}
        heading="Case Study"
        subHeading="Amazon Gift Pay"
        device="Desktop - Mobile"
        color="orange"
      />
      <PaymentCard
        date="28/10/2020"
        logo={amazonLogo}
        heading="Case Study"
        subHeading="Amazon Gift Pay"
        device="Desktop - Mobile"
        color="orange"
      />
      <PaymentCard
        date="17 Sep 2020"
        logo={appleLogo}
        heading="Case Study"
        subHeading="Apple Gift Payment"
        device="MacOS - Mobile"
        color="whitesmoke"
      />
    </>
  );
};

export default PaymentProp;
