import { IProduct } from '../../models/IProduct';
import './index.css';
import React, { FC, memo } from 'react';
import PricesProduct from '../pricesproduct';
import Addbasket from '../addbasket';

interface MoreDetailesInfo {
  currentProduct: IProduct;
  addBasket: (product: IProduct, countbasket: number) => void;
}

const MoreDetailesInfo: FC<MoreDetailesInfo> = (props) => {
  return (
    <div className="More_detailes_info-container">
      <div className="More_detailes_info-title">
        {props.currentProduct.title}
      </div>
      <div className="More_detailes_info-prices">
        <PricesProduct
          oldPrice={props.currentProduct.old_price}
          newPrice={props.currentProduct.new_price}
          count={props.currentProduct.count}
        />
      </div>
      <div className="More_detailes_info-count-container">
        <Addbasket
          product={props.currentProduct}
          addBasket={props.addBasket}
          basket={'Купить'}
        />
      </div>
      <div className="More_detailes_info-text-container">
        <p>{props.currentProduct.information.title}</p>
        <p>{props.currentProduct.information.description}</p>
        <p>{props.currentProduct.information.pragraph}</p>
        <p>{props.currentProduct.information.title_advantages}</p>
        <ul className="More_detailes_info-text-advantages">
          {props.currentProduct.information.advantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{props.currentProduct.information.company_information}</p>
        <p>{props.currentProduct.information.ending}</p>
      </div>
    </div>
  );
};

export default memo(MoreDetailesInfo);
