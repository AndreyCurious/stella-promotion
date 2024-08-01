import './index.css';
import React, { FC, memo } from 'react';

interface PriceProduct {
  oldPrice: number;
  newPrice: number;
  count: number;
}

const PriceProduct: FC<PriceProduct> = (props) => {
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
