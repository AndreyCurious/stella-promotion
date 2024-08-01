import React, { ForwardedRef, HTMLProps, memo, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchBanner,
  fetchProducts,
} from '../../store/reducers/ActionCreators';
import Banner from '../../components/banner';
import Category from '../../components/category';
import { setCurrentProduct } from '../../store/reducers/MoreDetailsSlice';
import { addProduct } from '../../store/reducers/BasketSlice';
import { IProduct } from '../../models/IProduct';
import { moreProducts } from '../../store/reducers/ProductsSlice';

const Slats = React.forwardRef<HTMLDivElement, HTMLProps<HTMLButtonElement>>(
  (props, ref) => {
    const dispatch = useAppDispatch();
    const bannerSlats = useAppSelector(
      (state) => state.bannersReducer.banners.slats
    );
    const productsSlats = useAppSelector(
      (state) => state.productsReducer.products.slats
    );
    const limitSlats = useAppSelector(
      (state) => state.productsReducer.limit.slats.products
    );
    const count = useAppSelector(
      (state) => state.productsReducer.counts.slats.count
    );
    const isLoadingProducts = useAppSelector(
      (state) => state.productsReducer.isLoading
    );
    useEffect(() => {
      dispatch(fetchBanner('slats'));
    }, [dispatch]);
    useEffect(() => {
      dispatch(fetchProducts({ title: 'slats', limit: limitSlats }));
    }, [dispatch, limitSlats]);
    const callbacks = {
      openModalDetails: (product: IProduct) =>
        dispatch(setCurrentProduct(product)),
      addBasket: (product: IProduct, countbasket: number) => {
        dispatch(addProduct({ product, countbasket }));
      },
      moreProductsPanels: () => {
        dispatch(moreProducts({ collection: 'slats', products: 'poducts' }));
      },
    };

    return (
      <>
        <div ref={ref}>
          <Banner item={bannerSlats} />
        </div>
        <Category
          moreProducts={callbacks.moreProductsPanels}
          products={productsSlats}
          openDetailes={callbacks.openModalDetails}
          addBasket={callbacks.addBasket}
          hideMoreProductsBtn={limitSlats >= count}
          isLoading={isLoadingProducts}
        />
      </>
    );
  }
);

export default memo(Slats);
