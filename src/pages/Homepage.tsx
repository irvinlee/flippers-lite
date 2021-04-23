import { useState } from 'react';
import styled from 'styled-components';

import {
  ClearFiltersButton,  
  ListingsSection,
  ResultsInfo,
  SearchBox
} from '../modules/MarketPlace/components';

import {
  FiltersDrawer
} from '../modules/Filters/components';

import { ViewMode } from '../modules/MarketPlace/types';

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

  return (
    <MainWrapper>
      <FiltersDrawer />
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
  );
}
