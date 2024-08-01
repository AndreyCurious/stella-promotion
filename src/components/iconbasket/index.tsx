import './index.css';
import React, { FC, memo } from 'react';
import shopper from '../../assets/free-icon-shopping-bag-2956820.png';

interface IconBasket {
  count: number;
  openBasket: () => void;
  isOpen: boolean;
}

const IconBasket: FC<IconBasket> = (props) => {
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
        <img src={shopper} />
        <span className="Icon-basket-count">{props.count}</span>
      </button>
    </>
  );
};

export default memo(IconBasket);
