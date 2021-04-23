import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ViewMode } from '../../types';

import CardView from './CardView';
import TableView from './TableView';

const Wrapper = styled.div`
`;

export default function ListingSection({mode}: {mode: string}) {
  const displayContents = () => {
    if(mode === ViewMode.cards) {
      return <CardView />;
    } 
    return <TableView />;
  };

  return (
    <Wrapper>
      { displayContents() }
    </Wrapper>
  );
}

ListingSection.propTypes = {
  mode: PropTypes.oneOf([ViewMode.table, ViewMode.cards]),
};
