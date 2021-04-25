import styled from 'styled-components';
import kebabCase from 'lodash.kebabcase';

const Wrapper = styled.div`
  position: relative;
  padding-left: 1.6rem;

  &:before {
    content: " ";
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &.new-listing {
    &: before {
      background-color: rgb(245,166,34) !important;
    }
  }

  &.sold {
    &: before {
      background-color: rgb(222, 12, 12);
    }
  }

  &.for-sale {
    &: before {
      background-color: rgb(60, 121, 203);;
    }
  }
`;

export default function ListingStatus({isNew, status}: {isNew: boolean, status: string}) {  
  const statusToDisplay = isNew ? 'New Listing' : status;
  const classnames = [kebabCase(status)];

  if(isNew) {
    classnames.push('new-listing');
  }

  return <Wrapper className={classnames.join(' ')}>{statusToDisplay}</Wrapper>
}
