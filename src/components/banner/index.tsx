import { IBanner } from '../../models/IBanner';
import './index.css';
import React, { FC, memo, useRef } from 'react';

interface Banner {
  item: IBanner | null;
}

const Banner: FC<Banner> = (props) => {
  return (
    <div
      id={props.item?.fetch_title}
      className={
        Number(props.item?.id) === 1
          ? 'Banner-container first-banner'
          : 'Banner-container'
      }
    >
      <div className="Banner-left_side">
        <h2 className="Banner-left_side_title">{props.item?.title_banner}</h2>
        <p className="Banner-left_side_desc">{props.item?.title_product}</p>
        <p className="Banner-left_side_discont">
          скидки <br /> {props.item?.discount_percent}
        </p>
        <p className="Banner-left_side_data">
          * Акция действует до {props.item?.discount_time}
        </p>
      </div>
      <div
        style={
          {
            backgroundImage: `url(${props.item?.img_banner})`,
          } as React.CSSProperties
        }
        className="Banner-right_side"
      >
        <div className="Banner-right_side-content">
          <ul className="Banner-right_side-content-info">
            <li className="Banner-right_side-content-info-title">
              {props.item?.product.name}
            </li>
            <li>Форма: {props.item?.product.form}</li>
            <li>Коллекция: {props.item?.product.collection}</li>
            <li>Цвет: {props.item?.product.colors}</li>
            <li>Размер: {props.item?.product.size}</li>
          </ul>
          <div className="Banner-right_side-content-old_price">
            {props.item?.product.old_price}
          </div>
          <div className="Banner-right_side-content-new_price">
            {props.item?.product.new_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
