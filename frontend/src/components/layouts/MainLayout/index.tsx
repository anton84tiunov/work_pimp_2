import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Main from './Main';
import { Div } from '../../common';

const MainLayout: React.FC = () => {
  return (
    <Div>
      <Header />
      <Div style={{ display: 'flex' }}>
        <Aside />
        <Main />
      </Div>
      <Footer />
    </Div>
  );
};

export default MainLayout;