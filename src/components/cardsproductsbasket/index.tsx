import './index.css';
import React, { FC, memo } from 'react';
import { IProduct } from '../../models/IProduct';

interface CardsProductsBasket {
  productsInBasket: IProduct[];
  deleteProduct: (product: IProduct) => void;
  removeOneProduct: (product: IProduct) => void;
  addOneProduct: (product: IProduct) => void;
  closeBasket: () => void;
}

const CardsProductsBasket: FC<CardsProductsBasket> = (props) => {
  if (props.productsInBasket.length === 0) {
    props.closeBasket();
  }
  return (
    <>
      <div className="Cards-products-basket">
        {props.productsInBasket.map((product) => (
          <div
            key={product.id}
            className="Cards-products-basket-product"
          >
            <div className="Cards-products-basket-product-first_section">
              <div className="Cards-products-basket-product-img">
                <img
                  src={product.product_imgs[0].img}
                  alt="Картинка товара"
                />
              </div>
            </div>
            <div className="Cards-products-basket-product-second_section">
              <span className="Cards-products-basket-product-title">
                {product.title}
              </span>
              <div className="Cards-products-basket-product-btns">
                <div className="Cards-products-basket-product-btns-change_count">
                  <button
                    onClick={
                      product.countbasket != 1
                        ? () => props.removeOneProduct(product)
                        : () => props.deleteProduct(product)
                    }
                  >
                    -
                  </button>
                  <span>{product.countbasket}</span>
                  <button onClick={() => props.addOneProduct(product)}>
                    +
                  </button>
                </div>
                <div className="Cards-products-basket-product-btns-price">
                  <span>{product.new_price * product.countbasket} руб.</span>
                </div>
                <button
                  onClick={() => props.deleteProduct(product)}
                  id="Cards-products-basket-product-btns-delete_product"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ESRhESvwPEayKWoDsvS4lFgfGNIHB9Ff9g&s"
                    alt="удалить товар из корзины"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(CardsProductsBasket);
