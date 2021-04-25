import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {  
  ListingsSection,
  ResultsInfo,
  SearchBox
} from '../modules/MarketPlace/components';

import {
  FiltersDrawer,
  ClearFiltersButton,
} from '../modules/Filters/components';

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
`;

export default function Homepage() {
  const [viewMode, setViewMode] = useState<string>(ViewMode.table);
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState<boolean>(false);

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
              <select onChange={(e) => setViewMode(e.target.value)} value={viewMode}>
                <option value={ViewMode.cards}>Cards</option>
                <option value={ViewMode.table}>Table</option>
              </select>
            </ViewModeWrapper>
            <SearchBox />
          </OptionsSectionWrapper>
        </TopSection>
        <ListingsSectionWrapper>
          <ListingsSection mode={viewMode}/>
        </ListingsSectionWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
