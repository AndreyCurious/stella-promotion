import './index.css';
import React, { FC, ReactNode, memo } from 'react';

interface BasketContent {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
  totalPrice: number;
}

const BasketContent: FC<BasketContent> = (props) => {
  return (
    <>
      <div className="Basket_content">
        <h2 className="Basket_content-title">Ваш заказ:</h2>
        {props.children}
      </div>
    </>
  );
};

export default memo(BasketContent);
