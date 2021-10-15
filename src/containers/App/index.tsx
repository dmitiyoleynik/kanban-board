import React, { FC } from 'react';

import { ThemeProvider } from '@mui/styles';

import Board from 'containers/Board';

import theme from 'theme';

import useAppStyles from './app.styles';

const App: FC = () => {
  const style = useAppStyles();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <main className={style.app}>
          <Board />
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
