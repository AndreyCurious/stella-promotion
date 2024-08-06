import { IProduct } from '../../models/IProduct';
import ProductCard from '../productCard';
import './index.css';
import React, { FC, memo } from 'react';

interface ICategory {
  products: IProduct[];
  openDetailes: (product: IProduct) => void;
  addBasket: (product: IProduct, countbasket: number) => void;
  moreProducts: () => void;
  hideMoreProductsBtn: boolean;
  isLoading: boolean;
}

const Category: FC<ICategory> = (props) => {
  return (
    <>
      <div className="Category-container">
        <h2 className="Category-title">{props.products[0]?.category}</h2>
        <div className="Category-products-container">
          {props.products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              openModalDetailes={props.openDetailes}
              addBasket={props.addBasket}
            />
          ))}
        </div>
        <button
          onClick={props.moreProducts}
          className={
            props.hideMoreProductsBtn
              ? 'Category-more_products_btn hide'
              : 'Category-more_products_btn'
          }
        >
          {'Показать еще'}
        </button>
        {props.isLoading && (
          <h3 className="Category-more_products_loading">Загрузка...</h3>
        )}
      </div>
    </>
  );
};

export default memo(Category);
