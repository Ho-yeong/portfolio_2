import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
};

export default App;
