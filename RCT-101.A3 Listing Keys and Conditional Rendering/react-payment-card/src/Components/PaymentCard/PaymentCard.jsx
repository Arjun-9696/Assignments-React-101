import React from 'react';
import './PaymentCard.css';
import arrow from '../../icons/Arrow-right-512.png';
const PaymentCard = (props) => {
  return (
    <>
      <div id="paymentcard" style={{ backgroundColor: props.color }}>
        <div>
          <div>{props.date}</div>
          <div>{props.heading}</div>
          <div>{props.subHeading}</div>
          <div>{props.device}</div>
        </div>
        <div>
          <img src={props.logo} alt="logo" />
          <img src={arrow} alt="arrow image" />
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
