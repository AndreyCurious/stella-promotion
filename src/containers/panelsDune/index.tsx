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

const DunePanels = React.forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const dispatch = useAppDispatch();
  const bannerDune = useAppSelector(
    (state) => state.bannersReducer.banners.dune
  );
  const productsDunePanels = useAppSelector(
    (state) => state.productsReducer.products.panels_dune
  );
  const productsDuneStartFinish = useAppSelector(
    (state) => state.productsReducer.products.panels_start_finish
  );
  const productsDuneCorners = useAppSelector(
    (state) => state.productsReducer.products.corners_dune
  );
  const limitPanels = useAppSelector(
    (state) => state.productsReducer.limit.panels_dune.products
  );
  const limitCorners = useAppSelector(
    (state) => state.productsReducer.limit.panels_dune.corners
  );
  const limitStartFinish = useAppSelector(
    (state) => state.productsReducer.limit.panels_dune.start_finish
  );
  const countPanelsDune = useAppSelector(
    (state) => state.productsReducer.counts.panels_dune.count
  );
  const countStartFinish = useAppSelector(
    (state) => state.productsReducer.counts.panels_start_finish.count
  );
  const countCorners = useAppSelector(
    (state) => state.productsReducer.counts.corners_dune.count
  );
  const isLoadingProducts = useAppSelector(
    (state) => state.productsReducer.isLoading
  );

  useEffect(() => {
    dispatch(fetchBanner('dune'));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchProducts({ title: 'panels_dune', limit: limitPanels }));
  }, [dispatch, limitPanels]);
  useEffect(() => {
    dispatch(fetchProducts({ title: 'corners_dune', limit: limitCorners }));
  }, [dispatch, limitCorners]);
  useEffect(() => {
    dispatch(
      fetchProducts({ title: 'panels_start_finish', limit: limitStartFinish })
    );
  }, [dispatch, limitStartFinish]);
  const callbacks = {
    openModalDetails: (product: IProduct) =>
      dispatch(setCurrentProduct(product)),
    addBasket: (product: IProduct, countbasket: number) => {
      dispatch(addProduct({ product, countbasket }));
    },
    morePanels: () =>
      dispatch(
        moreProducts({ collection: 'panels_dune', products: 'products' })
      ),
    moreCorners: () =>
      dispatch(
        moreProducts({ collection: 'panels_dune', products: 'corners' })
      ),
    moreStartFinish: () =>
      dispatch(
        moreProducts({ collection: 'panels_dune', products: 'start_finish' })
      ),
  };

  return (
    <>
      <div ref={ref}>
        <Banner item={bannerDune} />
      </div>
      <Category
        moreProducts={callbacks.morePanels}
        products={productsDunePanels}
        openDetailes={callbacks.openModalDetails}
        addBasket={callbacks.addBasket}
        hideMoreProductsBtn={limitPanels > countPanelsDune}
        isLoading={isLoadingProducts}
      />
      <Category
        moreProducts={callbacks.moreStartFinish}
        products={productsDuneStartFinish}
        openDetailes={callbacks.openModalDetails}
        addBasket={callbacks.addBasket}
        hideMoreProductsBtn={limitStartFinish > countStartFinish}
        isLoading={isLoadingProducts}
      />
      <Category
        moreProducts={callbacks.moreCorners}
        products={productsDuneCorners}
        openDetailes={callbacks.openModalDetails}
        addBasket={callbacks.addBasket}
        hideMoreProductsBtn={limitCorners >= countCorners}
        isLoading={isLoadingProducts}
      />
    </>
  );
});

export default memo(DunePanels);
