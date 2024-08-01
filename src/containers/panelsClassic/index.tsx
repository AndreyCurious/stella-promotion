import React, { HTMLProps, memo, useEffect } from 'react';
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

const ClassicPanels = React.forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const dispatch = useAppDispatch();
  const bannerClassic = useAppSelector(
    (state) => state.bannersReducer.banners.classic
  );

  const productsClassic = useAppSelector(
    (state) => state.productsReducer.products.panels_classic
  );

  const limitPanels = useAppSelector(
    (state) => state.productsReducer.limit.panels_classic.products
  );

  const count = useAppSelector(
    (state) => state.productsReducer.counts.panels_classic.count
  );

  const isLoadingProducts = useAppSelector(
    (state) => state.productsReducer.isLoading
  );

  useEffect(() => {
    dispatch(fetchBanner('classic'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ title: 'panels_classic', limit: limitPanels }));
  }, [dispatch, limitPanels]);

  const callbacks = {
    openModalDetails: (product: IProduct) =>
      dispatch(setCurrentProduct(product)),
    addBasket: (product: IProduct, countbasket: number) => {
      dispatch(addProduct({ product, countbasket }));
    },
    moreProductsPanels: () => {
      dispatch(
        moreProducts({ collection: 'pannels_classic', products: 'panels' })
      );
    },
  };

  return (
    <>
      <div ref={ref}>
        <Banner item={bannerClassic} />
      </div>
      <Category
        moreProducts={callbacks.moreProductsPanels}
        products={productsClassic}
        openDetailes={callbacks.openModalDetails}
        addBasket={callbacks.addBasket}
        hideMoreProductsBtn={limitPanels >= count}
        isLoading={isLoadingProducts}
      />
    </>
  );
});

export default memo(ClassicPanels);
