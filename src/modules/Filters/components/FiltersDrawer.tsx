import { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEFConfig } from '../redux/actions';
import { selectNiches, selectMonetizations, selectRequestStatus } from '../redux/selectors';
import { RequestStatus } from '../../common/types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 998;
`;

const MainWrapper = styled.div`
  position: fixed;
  z-index: 999;
  overflow: hidden;
  width: 0;
  height: 0;
  transition: width 0.25s ease-in-out;
  background-color: white;

  &.open {
    width: ${props => props.theme.drawer.width};
    height: ${props => props.theme.drawer.height};
  }
`;

export default function FiltersDrawer({isOpen = false, displayOverlay = true}:{isOpen?: boolean, displayOverlay?: boolean}) {
  const dispatch = useDispatch();
  const niches = useSelector(selectNiches);
  const monetizations = useSelector(selectMonetizations);
  const configRequestStatus = useSelector(selectRequestStatus);

  useEffect(
    () => {
      if(configRequestStatus === RequestStatus.notStarted) {
        dispatch(fetchEFConfig());
      }
    }, [dispatch, configRequestStatus]
  );

  return (
    <Fragment>
      {
        isOpen && displayOverlay && (<Overlay />)
      }
      <MainWrapper className={`${isOpen && 'open'}`}>
        Filters
      </MainWrapper>    
    </Fragment>
  );
}
