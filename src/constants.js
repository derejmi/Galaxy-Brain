import { randomId } from './utils';
import PropTypes from 'prop-types';

export const initialState = [{
  id: randomId(),
  name: 'Player 1',
  score: 20,
}, {
  id: randomId(),
  name: 'Player 2',
  score: 19,
}, {
  id: randomId(),
  name: 'Player 3',
  score: 18,
}, {
  id: randomId(),
  name: 'Player 4',
  score: 17,
}];

export const ElementType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  hitpoints: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]
  ),
  score: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]
  ),
});
