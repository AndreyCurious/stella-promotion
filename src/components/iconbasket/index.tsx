import './index.css';
import React, { FC, memo } from 'react';
import shopper from '../../assets/free-icon-shopping-bag-2956820.png';

interface IBasketIcon {
  count: number;
  openBasket: () => void;
  isOpen: boolean;
}

const IconBasket: FC<IBasketIcon> = (props) => {
  return (
    <>
      <button
        className={
          props.count > 0 && !props.isOpen
            ? 'Icon-basket active'
            : 'Icon-basket'
        }
        onClick={props.openBasket}
      >
        <img
          alt="shopper"
          src={shopper}
        />
        <span className="Icon-basket-count">{props.count}</span>
      </button>
    </>
  );
};

export default memo(IconBasket);
