import { FC } from 'react';

import Board from 'containers/Board/Board';

import useGlobalStyles from 'index.styles';

import useAppStyles from './app.styles';

const App: FC = () => {
  const style = useAppStyles();
  useGlobalStyles();

  return (
    <main className={style.app}>
      <Board />
    </main>
  );
};

export default App;
