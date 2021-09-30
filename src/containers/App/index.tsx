import { FC } from 'react';
import Card from '../Board/Card';
import useAppStyles from './app.styles';

const App: FC = () => {
  const style = useAppStyles();

  return (
    <div className={style.app}>
      <Card type="task" id={1} description="First task" state="To do" />
    </div>
  );
};

export default App;
