import styled from 'styled-components';
import kebabCase from 'lodash.kebabcase';

const Wrapper = styled.div`
`;

export default function ListingStatus({isNew, status}: {isNew: boolean, status: string}) {  
  const statusToDisplay = isNew ? 'New Listing' : status;
  const classnames = [kebabCase(status)];

  if(isNew) {
    classnames.push('new-listing');
  }

  return <Wrapper className={classnames.join(' ')}>{statusToDisplay}</Wrapper>
}
