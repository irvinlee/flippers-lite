import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

import { IPaginationParam } from '../types';

import {  
  ListingsSection,
  ResultsInfo,  
} from '../modules/MarketPlace/components';

import {
  FiltersDrawer,
  ClearFiltersButton,
  PaginationControls,
  SearchBox,
} from '../modules/Filters/components';

import { selectMarketplaceMetaData } from '../modules/Filters/redux/selectors';
import { selectApiRequestParams } from '../modules/MarketPlace/redux/selectors';

import { ViewMode } from '../modules/MarketPlace/types';

const PageTheme = {
  drawer: {
    width: '320px',
    height: '100vh',
    
    customStyles: {      
      right: '0',
      top: '0',
    },
  }
};

const MainWrapper = styled.div``;

const TopSection = styled.section`
  background-color: rgb(235, 239, 241);
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const OptionsSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ViewModeWrapper = styled.div`
`;

const ListingsSectionWrapper = styled.section`
  padding: 15px;
`;

export default function Homepage({viewMode}: {viewMode: string}) {  
  const marketplaceMetaData = useSelector(selectMarketplaceMetaData);
  const apiRequestParams = useSelector(selectApiRequestParams);
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { page } = useParams<IPaginationParam>();
  const history = useHistory();

  useEffect(
    () => {
      const redirectUrl = viewMode === ViewMode.cards ? '/cards/' : '/list/1';
      history.push(redirectUrl);
    }, [history, apiRequestParams]
  );
  
  return (
    <ThemeProvider theme={PageTheme}>
      <MainWrapper>
        <FiltersDrawer isOpen={isFiltersDrawerOpen}/>
        <TopSection>
          <div>
            <h1>Marketplace</h1>
            <ResultsInfo mode={viewMode}/>
          </div>
          <OptionsSectionWrapper>
            <ClearFiltersButton />
            <ViewModeWrapper>
              View Mode
              <select onChange={(e) => history.push(`/${e.target.value}`)} value={viewMode}>
                <option value={ViewMode.cards}>Cards</option>
                <option value={ViewMode.table}>Table</option>
              </select>
            </ViewModeWrapper>
            <SearchBox />
            <button onClick={() => setIsFiltersDrawerOpen(true)}>Filters</button>
          </OptionsSectionWrapper>
        </TopSection>
        <ListingsSectionWrapper>
          <ListingsSection mode={viewMode} page={parseInt(page)} itemsPerPage={itemsPerPage}/>
        </ListingsSectionWrapper>
        {
          viewMode === ViewMode.table && !!marketplaceMetaData.pages && (
            <PaginationControls
              currentPage={parseInt(page)}
              itemsPerPage={itemsPerPage}
              onChangePage={(newPage: any) => history.push(`/list/${newPage}`)}              
              onChangeItemsPerPage={(itemsPerPage: any) => setItemsPerPage(itemsPerPage)}
            />
          )
        }
      </MainWrapper>
    </ThemeProvider>
  );
}
