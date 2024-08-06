import { product_imgs } from '../../models/IProduct';
import './index.css';
import React, { FC, memo } from 'react';

interface IPhotosBlock {
  currentProductImgs: product_imgs[];
  setMainPhotoId: Function;
  mainPhoto: product_imgs;
  mainPhotoId: number;
}

const PhotosBlock: FC<IPhotosBlock> = (props) => {
  return (
    <div className="Photos_block-product-photos">
      <div className="Photos_block-product-photos-block">
        {props.currentProductImgs.map((photo) => (
          <img
            className="Photos_block-product-photo"
            onClick={() => props.setMainPhotoId(photo.id)}
            key={photo.id}
            src={photo.img}
            alt={`detail ${photo.id}`}
          />
        ))}
      </div>
      <div className="Photos_block-product-photos-main_photo">
        <button
          onClick={
            props.mainPhotoId === 1
              ? () => props.setMainPhotoId(props.currentProductImgs.length)
              : () => props.setMainPhotoId(props.mainPhotoId - 1)
          }
          className="icon-left"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/32/32542.png"
            alt="before"
          />
        </button>

        <img
          className="Photos_block-product-main_photo"
          src={props.mainPhoto.img}
          alt="main"
        />
        <button
          className="icon-right"
          onClick={
            props.mainPhotoId === props.currentProductImgs.length
              ? () => props.setMainPhotoId(1)
              : () => props.setMainPhotoId(props.mainPhotoId + 1)
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="after"
          />
        </button>
      </div>
    </div>
  );
};

export default memo(PhotosBlock);
