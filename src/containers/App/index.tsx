import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/styles';

import Board from 'containers/Board';

import theme from 'theme';

import store from 'store';

import useAppStyles from './app.styles';

const App: FC = () => {
  const style = useAppStyles();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <main className={style.app}>
            <Board />
          </main>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
