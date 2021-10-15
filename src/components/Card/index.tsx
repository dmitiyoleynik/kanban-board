import { FC, DragEvent, useCallback, useMemo } from 'react';

import MuiCard from '@mui/material/Card';
import TaskIcon from '@mui/icons-material/Task';
import { Avatar, CardContent, Stack, Typography } from '@mui/material';

import Tag from 'components/Tag';

import { ICard } from 'types/card';
import { randomColor } from 'services/random';

import useCardStyles from './card.styles';

const Card: FC<ICard> = ({ id, title, tags, assignedTo }) => {
  const dragStartHandler = useCallback((e: DragEvent<HTMLDivElement>) => e.dataTransfer.setData('text/plain', id.toString()), [id]);
  const avatarLetter = useMemo(() => assignedTo.slice(0, 1), [assignedTo]);
  const avatarColor = useMemo(() => randomColor(), []);
  const style = useCardStyles();

  return (
    <MuiCard raised className={style.card} draggable onDragStart={dragStartHandler}>
      <CardContent>
        <Stack className={style.cardInfo} spacing={2}>
          <Stack direction="row" spacing={2}>
            <TaskIcon />
            <Typography>{title}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} className={style.assignedTo}>
            <Avatar sx={{ bgcolor: avatarColor }}>{avatarLetter}</Avatar>
            <Typography>{assignedTo}</Typography>
          </Stack>
          {tags && (
            <Stack direction="row" spacing={1}>
              {tags.map(tag => (
                <Tag title={tag} />
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
