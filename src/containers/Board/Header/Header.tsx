import { FC } from 'react';

import useHeaderStyles from './header.styles';

interface IHeader {
  name: string;
}

const Header: FC<IHeader> = ({ name }) => {
  const styles = useHeaderStyles();

  return <div className={styles.header}>{name}</div>;
};

export default Header;
