import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { selectApiRequestParams, selectIsLoadingListings, selectListings, selectMarketplaceMetaData } from '../../redux/selectors';
import { fetchListings } from '../../redux/actions';
import { ViewMode } from '../../types';
import CardView from './CardView';
import TableView from './TableView';
import { Spinner } from '../../../common/components';

const Wrapper = styled.div`
`;

const ComponentTheme = {
  loadingSpinnerStyles: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
};

export default function ListingSection({mode, page, itemsPerPage}: {mode: string, page: number, itemsPerPage: number}) {
  const dispatch = useDispatch();
  const apiRequestParams = useSelector(selectApiRequestParams);
  const isLoading = useSelector(selectIsLoadingListings);
  const listings = useSelector(selectListings);
  const metaData = useSelector(selectMarketplaceMetaData);

  useEffect(
    () => {      
      dispatch(fetchListings({...apiRequestParams, limit: itemsPerPage, page})())      
    }, [apiRequestParams, dispatch, page, itemsPerPage]
  );
  
  const displayContents = () => {
    if(mode === ViewMode.cards) {
      return <CardView listings={listings} metaData={metaData}/>;
    } 
    return <TableView listings={listings} metaData={metaData}/>;
  };

  return (
    <ThemeProvider theme={ComponentTheme}>
      <Wrapper>
        {
          isLoading && (
            <Spinner />
          )
        }        
        { displayContents() }
      </Wrapper>
    </ThemeProvider>
  );
}

ListingSection.propTypes = {
  mode: PropTypes.oneOf([ViewMode.table, ViewMode.cards]),
};
