import PropTypes from 'prop-types';
import { ViewMode } from '../types';

export default function ResultsInfo({mode}: {mode: string}) {
  return (
    <div>Mode: {mode}</div>
  );
}

ResultsInfo.propTypes = {
  mode: PropTypes.oneOf([ViewMode.table, ViewMode.cards]),
};
