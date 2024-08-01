import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeMenu, openMenu } from '../../store/reducers/MenuBurgerSlice';
import Mainheader from '../../components/mainheader/index';
import SideMenu from '../../components/sideMenu';
import Backgroundtemplate from '../../components/backgroundtemplate';
interface IHeader {
  clickRef1: () => void;
  clickRef2: () => void;
  clickRef3: () => void;
}

function Header(props: IHeader) {
  const dispatch = useAppDispatch();

  const menuBurgerSelect = useAppSelector((state) => state.menuBurgerReducer);

  const callbacks = {
    closeMenu: () => dispatch(closeMenu()),
    openMenu: () => dispatch(openMenu()),
  };

  return (
    <>
      <SideMenu
        isOpen={menuBurgerSelect.isOpen}
        closeMenu={callbacks.closeMenu}
        clickRef1={props.clickRef1}
        clickRef2={props.clickRef2}
        clickRef3={props.clickRef3}
      />
      <Mainheader
        clickRef1={props.clickRef1}
        clickRef2={props.clickRef2}
        clickRef3={props.clickRef3}
        openMenu={callbacks.openMenu}
        isOpen={menuBurgerSelect.isOpen}
      />
      <Backgroundtemplate
        isOpen={menuBurgerSelect.isOpen}
        closeMenu={callbacks.closeMenu}
      />
    </>
  );
}

export default memo(Header);
