import { FC, useMemo } from 'react';

import { Box, Typography } from '@mui/material';

import { randomColor } from 'services/random';
import useTagStyles from './tag.styles';

interface ITagProps {
  title: string;
}

const Tag: FC<ITagProps> = ({ title }) => {
  const color = useMemo(() => randomColor(), []);
  const style = useTagStyles({ color });

  return (
    <Box className={style.tag}>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Tag;
