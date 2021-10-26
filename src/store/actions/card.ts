import { setDone, addCard, removeCard, setReview, setToDo, setInProgress } from 'store/actionTypes/card';
import { ICard } from 'types/card';

export default interface ICardAction {
  type: typeof addCard | typeof removeCard | typeof setDone | typeof setReview | typeof setToDo | typeof setInProgress;
  payload: number | ICard;
}
