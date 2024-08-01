import './index.css';
import React, { FC, memo } from 'react';
import { IProduct } from '../../models/IProduct';
import { Link } from 'react-router-dom';
import PricesProduct from '../pricesproduct';
import AddBasket from '../addbasket';

interface ProductCard {
  product: IProduct;
  openModalDetailes: (product: IProduct) => void;
  addBasket: (product: IProduct, countbasket: number) => void;
}

const ProductCard: FC<ProductCard> = (props) => {
  const handleBackground = (e: HTMLElement, img: string) => {
    e.style.backgroundImage = `url("${img}")`;
  };
  return (
    <div className="Card-product-container">
      <Link
        to={`/product/${props.product.id}`}
        onClick={() => props.openModalDetailes(props.product)}
        className="Card-product-img_container"
      >
        <div
          className="Card-product-img"
          style={{
            backgroundImage: `url(${props.product.product_imgs[0].img})`,
          }}
          onMouseEnter={(e) =>
            handleBackground(
              e.target as HTMLElement,
              props.product.product_imgs[1].img
            )
          }
          onMouseLeave={(e) => {
            handleBackground(
              e.target as HTMLElement,
              props.product.product_imgs[0].img
            );
          }}
        />
        <span className="Card-product-img-sales">
          -{props.product.discount_percent}
        </span>
        <h3 className="Card-product-title">{props.product.title}</h3>
      </Link>
      <Link
        to={`/product/${props.product.id}`}
        onClick={() => props.openModalDetailes(props.product)}
        className="Card-product-prices"
      >
        <PricesProduct
          oldPrice={props.product.old_price}
          newPrice={props.product.new_price}
          count={props.product.count}
        />
      </Link>
      <div className="Card-product-buttons_container">
        <Link
          to={`/product/${props.product.id}`}
          onClick={() => props.openModalDetailes(props.product)}
          className="Card-product-more_detailes"
        >
          Подробнее
        </Link>
        <div className="Card-product-count-container">
          <AddBasket
            product={props.product}
            addBasket={props.addBasket}
            basket={'В корзину'}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
