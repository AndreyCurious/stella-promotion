import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Iconbasket from '../../components/iconbasket';
import {
  addOneProduct,
  closeBasket,
  openBasket,
  removeOneProduct,
  removeProduct,
} from '../../store/reducers/BasketSlice';
import Modalbasket from '../../components/modalbasket';
import { IProduct } from '../../models/IProduct';
import Closebtn from '../../components/closebtn';
import Basketcontent from '../../components/basketcontent';
import Cardsproductsbasket from '../../components/cardsproductsbasket';
import product from '../../app/product';
import Dataclientform from '../../components/dataclientform';
import Totalprice from '../../components/totalprice';

function Basket() {
  const dispatch = useAppDispatch();
  const basketIsOpen = useAppSelector((state) => state.basketReducer.isOpen);
  const productsInBasket = useAppSelector(
    (state) => state.basketReducer.basket
  );
  const totalPrice = useAppSelector((state) => state.basketReducer.totalPrice);
  const scrollY = document.body.style.top;
  const callbacks = {
    openBasket: () => dispatch(openBasket()),
    closeBasket: () => dispatch(closeBasket()),
    deleteProduct: (product: IProduct) => dispatch(removeProduct(product)),
    addOneProduct: (product: IProduct) => dispatch(addOneProduct(product)),
    removeOneProduct: (product: IProduct) =>
      dispatch(removeOneProduct(product)),
  };

  return (
    <>
      <Iconbasket
        count={productsInBasket.length}
        openBasket={callbacks.openBasket}
        isOpen={basketIsOpen}
      />
      <Modalbasket
        isOpen={basketIsOpen}
        closeBasket={callbacks.closeBasket}
        scrollY={scrollY}
      >
        <Basketcontent totalPrice={totalPrice}>
          <Cardsproductsbasket
            productsInBasket={productsInBasket}
            deleteProduct={callbacks.deleteProduct}
            addOneProduct={callbacks.addOneProduct}
            removeOneProduct={callbacks.removeOneProduct}
            closeBasket={callbacks.closeBasket}
          />
          <Totalprice totalPrice={totalPrice} />
          <Dataclientform
            productsInBasket={productsInBasket}
            totalPrice={totalPrice}
          />
        </Basketcontent>
      </Modalbasket>
    </>
  );
}

export default memo(Basket);
