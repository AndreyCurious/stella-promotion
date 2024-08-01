import React, { memo } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './main';
import Product from './product';
import Basket from '../containers/basket';
import { useAppSelector } from '../hooks/redux';

function App() {
  const isOpenSideMenu = useAppSelector(
    (state) => state.menuBurgerReducer.isOpen
  );
  const isOpenBasket = useAppSelector((state) => state.basketReducer.isOpen);
  if (isOpenBasket || isOpenSideMenu) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<Main />}
        />
        <Route
          path={'/product/:id'}
          element={<Product />}
        />
      </Routes>
      <Basket />
    </>
  );
}

export default memo(App);
