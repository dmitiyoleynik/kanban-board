import React, { FC, useState } from 'react';
import TaskIcon from '@mui/icons-material/Task';
import BugReportIcon from '@mui/icons-material/BugReport';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import useCardStyles from './card.styles';
import { State } from '../../../types/task';

interface ICard {
  type: 'task' | 'bug';
  id: number;
  description: string;
  initialState: 'To do' | 'In progress' | 'Done';
}

const Card: FC<ICard> = ({ type, id, description, initialState }) => {
  const style = useCardStyles();
  const [state, setState] = useState('');

  const handleChange: React.ChangeEventHandler<SelectChangeEvent> = event => {
    setState(event.target.value);
  };

  return (
    <div className={style.card}>
      <div>
        {type === 'task' ? <TaskIcon /> : <BugReportIcon />}
        {id}
        {description}
      </div>
      <div className={style.state}>
        <p>State </p>
        {state}
        <Select value={state} onChange={handleChange}>
          <MenuItem>{State.Todo}</MenuItem>
          <MenuItem>{State.InProgress}</MenuItem>
          <MenuItem>{State.Done}</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Card;
