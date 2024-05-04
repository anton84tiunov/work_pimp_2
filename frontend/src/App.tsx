import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  );
};

export default App;
