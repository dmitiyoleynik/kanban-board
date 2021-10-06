import { FC, useState } from 'react';

import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ICard } from 'types/card';
import { taskType } from 'types/task';

import useCardStyles from './card.styles';
import { taskTypes } from '../../../constants';

const Card: FC<ICard> = ({ pictureType, id, description, initialState }) => {
  const style = useCardStyles();
  const [state, setState] = useState<taskType>(initialState);

  const handleChange = (event: SelectChangeEvent<taskType>) => {
    setState(event.target.value as taskType);
  };

  const dragStartHandler = (e: any) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  return (
    <div className={style.card} draggable key={id} onDragStart={dragStartHandler}>
      <div>
        {pictureType === 'task' ? <TaskIcon /> : <BugReportIcon />}
        {id}
        {description}
      </div>
      <FormControl className={style.state}>
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select value={state} label="State" onChange={handleChange}>
          {taskTypes.map(type => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Card;
