import { FC, useCallback, useState } from 'react';

import { Stack } from '@mui/material';

import BoardColumn from 'containers/BoardColumn';

import type { TaskType } from 'types/task';
import { ICard } from 'types/card';

import { taskTypes } from 'utils/constants';

import useBoardStyles from './board.styles';

const cardsMocked: ICard[] = [
  {
    id: 1,
    title: 'Todo task',
    initialState: 'To do',
    assignedTo: 'Dmytro Oliinyk',
    tags: ['bug', 'fixit'],
  },
  {
    id: 2,
    title: 'Done task',
    initialState: 'Done',
    assignedTo: 'Dmytro Oliinyk',
    tags: ['andry chirt'],
  },
];

const Board: FC = () => {
  const [cards, setCards] = useState(cardsMocked);
  const styles = useBoardStyles();

  const onDrop = useCallback(
    (newState: TaskType, cardId: number) => setCards(cards.map(card => (cardId === card.id ? { ...card, initialState: newState } : card))),
    [setCards, cards],
  );

  return (
    <Stack className={styles.board} direction="row" spacing={2}>
      {taskTypes.map(typeName => (
        <BoardColumn columnName={typeName} dropHandler={onDrop} cards={cards.filter(card => card.initialState === typeName)} key={typeName} />
      ))}
    </Stack>
  );
};

export default Board;
