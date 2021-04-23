import styled from 'styled-components';
import Header from './Header';

const MainWrapper = styled.div`  
  color: black;
`;

const BodyWrapper = styled.div`
  
`;

export default function Layout({ children } : {children: any}) {
  return (
    <MainWrapper>
      <Header />
      <BodyWrapper>
        {children}
      </BodyWrapper>      
    </MainWrapper>
  );
}
