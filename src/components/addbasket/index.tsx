import { IProduct, product_imgs } from '../../models/IProduct';
import './index.css';
import React, { FC, memo, useState } from 'react';

interface AddBasket {
  product: IProduct;
  basket: string;
  addBasket: (product: IProduct, countbasket: number) => void;
}

const AddBasket: FC<AddBasket> = (props) => {
  const [countProducts, setCountProducts] = useState<number>(1);
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
        }}
        className="Add_basket-basket"
      >
        {props.basket}
      </button>
    </>
  );
};

export default memo(AddBasket);
