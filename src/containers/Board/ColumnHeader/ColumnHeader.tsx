import { FC } from 'react';

import useColumnHeaderStyles from './columnHeader.styles';

interface IColumnHeader {
  name: string;
}

const ColumnHeader: FC<IColumnHeader> = ({ name }) => {
  const styles = useColumnHeaderStyles();

  return <div className={styles.header}>{name}</div>;
};

export default ColumnHeader;
