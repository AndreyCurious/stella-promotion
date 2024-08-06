import React, { FC, memo } from 'react';
import './index.css';

interface ITotalPrice {
  totalPrice: number;
}

const TotalPrice: FC<ITotalPrice> = (props) => {
  return (
    <div className="Total_price">
      <span>Всего: {props.totalPrice} руб.</span>
    </div>
  );
};

export default memo(TotalPrice);
