import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';
import { taskType } from 'types/task';
import useCardStyles from './card.styles';

export interface ICard {
  type: 'task' | 'bug';
  id: number;
  description: string;
  initialState: taskType;
}

const Card: FC<ICard> = ({ type, id, description, initialState }) => {
  const style = useCardStyles();
  const [state, setState] = useState<taskType>(initialState);

  const handleChange = (event: SelectChangeEvent<taskType>) => {
    setState(event.target.value as taskType);
  };

  return (
    <div className={style.card} draggable>
      <div>
        {type === 'task' ? <TaskIcon /> : <BugReportIcon />}
        {id}
        {description}
      </div>
      <FormControl className={style.state}>
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select value={state} label="State" onChange={handleChange}>
          <MenuItem value="Todo">Todo</MenuItem>
          <MenuItem value="InProgress">InProgress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Card;
