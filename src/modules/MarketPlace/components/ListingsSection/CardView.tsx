import styled from 'styled-components';
import { IListingDisplayComponentProps } from '../../types';

const Wrapper = styled.div`
`;

export default function CardView({listings, metaData}: IListingDisplayComponentProps) {
  return (
    <Wrapper>
      Card View
    </Wrapper>
  );
}
