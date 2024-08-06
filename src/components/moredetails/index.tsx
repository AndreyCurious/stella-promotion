import { Link } from 'react-router-dom';
import { IProduct, product_imgs } from '../../models/IProduct';
import './index.css';
import React, { FC, memo } from 'react';
import BlockPhotos from '../blockphotos';
import MoreDetailesInfo from '../moredetailesinfo';

interface IMoreDetails {
  currentProduct: IProduct;
  setMainPhotoId: Function;
  mainPhoto: product_imgs;
  mainPhotoId: number;
  addBasket: (product: IProduct, countbasket: number) => void;
  openBasket: () => void;
}

const MoreDetails: FC<IMoreDetails> = (props) => {
  return (
    <div className="More_detailes-container">
      <Link
        className="More_detailes-button-back"
        to={'/'}
      >
        <img
          className="back_icon"
          src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
          alt="back"
        />
      </Link>
      <div className="More_detailes-content-container">
        <BlockPhotos
          currentProductImgs={props.currentProduct.product_imgs}
          setMainPhotoId={props.setMainPhotoId}
          mainPhoto={props.mainPhoto}
          mainPhotoId={props.mainPhotoId}
        />
        <MoreDetailesInfo
          openBasket={props.openBasket}
          addBasket={props.addBasket}
          currentProduct={props.currentProduct}
        />
      </div>
    </div>
  );
};

export default memo(MoreDetails);
