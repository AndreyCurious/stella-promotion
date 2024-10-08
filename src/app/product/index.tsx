import React, { memo, useEffect } from 'react';
import MoreDetailes from '../../components/moredetails';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setMainPhotoId } from '../../store/reducers/MoreDetailsSlice';
import { addProduct, openBasket } from '../../store/reducers/BasketSlice';
import { IProduct } from '../../models/IProduct';
import { fetchSingleProduct } from '../../store/reducers/ActionCreators';
import LoadingCircle from '../../components/loadingcircle';

function Product() {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.moreDetailReducer.product);
  const isLoading = useAppSelector(
    (state) => state.moreDetailReducer.isLoading
  );
  useEffect(() => {
    const address = window.location.href;
    const id = Number(address.split('/').at(-1));
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  const mainPhotoId = useAppSelector(
    (state) => state.moreDetailReducer.mainPhotoId
  );
  const mainPhoto = product.product_imgs.filter(
    (img) => img.id === mainPhotoId
  );

  const callbacks = {
    setMainPhotoId: (id: number) => dispatch(setMainPhotoId(id)),
    addbasket: (product: IProduct, countbasket: number) => {
      dispatch(addProduct({ product, countbasket }));
    },
    openBasket: () => dispatch(openBasket()),
  };

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <MoreDetailes
          setMainPhotoId={callbacks.setMainPhotoId}
          mainPhotoId={mainPhotoId}
          currentProduct={product}
          mainPhoto={mainPhoto[0]}
          addBasket={callbacks.addbasket}
          openBasket={callbacks.openBasket}
        />
      )}
    </>
  );
}

export default memo(Product);
