import React, { FC, useState, DragEvent, useCallback, useMemo } from 'react';

import MuiCard from '@mui/material/Card';
import TaskIcon from '@mui/icons-material/Task';
import { Avatar, CardContent, Stack, Box, Typography, dividerClasses } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { ICard } from 'types/card';
import { taskType } from 'types/task';

import Tag from 'components/Tag';
import { randomColor } from 'services/random';
import useCardStyles from './card.styles';

const Card: FC<ICard> = ({ id, initialState, title, tags, assignedTo }) => {
  const avatarColor = useMemo(() => randomColor(), []);
  const style = useCardStyles();
  const [state, setState] = useState<taskType>(initialState);

  const handleChange = (event: SelectChangeEvent<taskType>) => {
    setState(event.target.value as taskType);
  };
  const dragStartHandler = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', id.toString());
    },
    [id],
  );

  return (
    <MuiCard raised className={style.card} draggable onDragStart={dragStartHandler}>
      <CardContent>
        <Stack justifyContent="space-between" direction="column" alignItems="flex-start" spacing={2}>
          <Stack direction="row" spacing={2}>
            <TaskIcon />
            <Typography>{title}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: avatarColor }}>{assignedTo.slice(0, 1)}</Avatar>
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
