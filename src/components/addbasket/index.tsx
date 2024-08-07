import { IProduct } from '../../models/IProduct';
import Loadingpoints from '../loadingpoints';
import './index.css';
import React, { FC, memo, useState } from 'react';

interface IAddBasket {
  product: IProduct;
  basket: string;
  addBasket: (product: IProduct, countbasket: number) => void;
  openBasket?: () => void;
}

const AddBasket: FC<IAddBasket> = (props) => {
  const [isFakeLoading, setIsFakeLoading] = useState<boolean>(false);
  const [countProducts, setCountProducts] = useState<number>(1);
  const fakeLoading = () => {
    setIsFakeLoading(true);
    setTimeout(() => {
      setIsFakeLoading(false);
    }, 1000);
  };
  return (
    <>
      <div className="Add_basket-count">
        <button
          onClick={() =>
            Number(countProducts) <= 1
              ? setCountProducts(countProducts)
              : setCountProducts(countProducts - 1)
          }
          className="Add_basket-count-minus"
        >
          <span>-</span>
        </button>
        <input
          type="number"
          className="Add_basket-input"
          placeholder="1"
          min="1"
          max="999"
          onChange={(e) => setCountProducts(Number(e.target.value))}
          value={countProducts}
        />
        <button
          onClick={() => setCountProducts(countProducts + 1)}
          className="Add_basket-count-pluse"
        >
          <span>+</span>
        </button>
      </div>
      <button
        onClick={() => {
          props.addBasket(props.product, countProducts);
          setCountProducts(1);
          props.basket === 'Купить' && props.openBasket?.();
          fakeLoading();
        }}
        disabled={isFakeLoading}
        className={
          isFakeLoading ? 'Add_basket-basket loading' : 'Add_basket-basket'
        }
      >
        {isFakeLoading ? <Loadingpoints /> : props.basket}
      </button>
    </>
  );
};

export default memo(AddBasket);
