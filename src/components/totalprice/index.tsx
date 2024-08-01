import React, { FC, memo } from 'react';
import './index.css';

interface TotalPrice {
  totalPrice: number;
}

const TotalPrice: FC<TotalPrice> = (props) => {
  return (
    <div className="Total_price">
      <span>Всего: {props.totalPrice} руб.</span>
    </div>
  );
};

export default memo(TotalPrice);
