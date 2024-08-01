import React, { RefObject, createRef, memo } from 'react';
import Header from '../../containers/header';
import PanelsClassic from '../../containers/panelsClassic';
import PanelsDune from '../../containers/panelsDune';
import Slats from '../../containers/slats';
import Footer from '../../containers/footer';

function Main() {
  const ref1 = createRef<HTMLDivElement>();
  const ref2 = createRef<HTMLDivElement>();
  const ref3 = createRef<HTMLDivElement>();
  const buttonHandler = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };
  return (
    <>
      <Header
        clickRef1={() => buttonHandler(ref1)}
        clickRef2={() => buttonHandler(ref2)}
        clickRef3={() => buttonHandler(ref3)}
      />
      <PanelsClassic ref={ref1} />
      <PanelsDune ref={ref2} />
      <Slats ref={ref3} />
      <Footer />
    </>
  );
}

export default memo(Main);
