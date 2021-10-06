import { FC, useState, DragEvent, useCallback } from 'react';

import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ICard } from 'types/card';
import { taskType } from 'types/task';
import { taskTypes } from 'utils/constants';

import useCardStyles from './card.styles';

const Card: FC<ICard> = ({ pictureType, id, description, initialState }) => {
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
    <div className={style.card} draggable onDragStart={dragStartHandler}>
      <div>
        {pictureType === 'task' ? <TaskIcon /> : <BugReportIcon />}
        {id}
        {description}
      </div>
      <FormControl className={style.state}>
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select value={state} label="State" onChange={handleChange}>
          {taskTypes.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Card;
