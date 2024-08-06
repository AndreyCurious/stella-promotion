import './index.css';
import React, { FC, memo } from 'react';

interface IPriceProduct {
  oldPrice: number;
  newPrice: number;
  count: number;
}

const PriceProduct: FC<IPriceProduct> = (props) => {
  return (
    <>
      <span className="Product-newprice">
        {props.newPrice}₽ / {props.count}шт.
      </span>
      <span className="Product-oldprice">
        {props.oldPrice}₽ / {props.count}шт.
      </span>
    </>
  );
};

export default memo(PriceProduct);
