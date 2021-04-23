import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: rgb(34, 34, 34);
  color: white;
  padding: 15px;
`;

const HeaderLink = styled.span`
  font-size: 2rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLink>
          Marketplace
        </HeaderLink>
      </Link>
    </HeaderWrapper>
  );
}
