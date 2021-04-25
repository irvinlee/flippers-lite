import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEFConfig, setFilters } from '../redux/actions';
import {
  selectNiches,
  selectMonetizations,
  selectRequestStatus,
  selectSelectedNiches,
  selectSelectedMonetizations,
  selectSelectedStatuses
} from '../redux/selectors';

import { RequestStatus } from '../../common/types';
import { isArrayEqualToSet }  from '../../common/utils/helpers';

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
  height: ${props => props.theme.drawer.height};
  transition: width 0.25s ease-in-out;
  background-color: white;  
  ${props => ({...props.theme.drawer.customStyles})}
  
  &.open {
    width: ${props => props.theme.drawer.width};
    height: ${props => props.theme.drawer.height};
    padding: 15px;
  }
`;

const FilterGroup = styled.div`
  padding-bottom: 20px;

  .options {
    display: flex;
    justify-content: space-between;
    label {
      font-size: 1.2rem;
    }
  }
`;

export default function FiltersDrawer({isOpen = false, displayOverlay = true, onRequestClose}:{isOpen?: boolean, displayOverlay?: boolean, onRequestClose: Function}) {
  const dispatch = useDispatch();
  const niches = useSelector(selectNiches);
  const monetizations = useSelector(selectMonetizations);
  const statuses = [
    'New Listing',
    'For Sale',
    'Pending Sold',
    'Sold'
  ];

  const selectedNichesFromStore = useSelector(selectSelectedNiches);
  const selectedMonetizationsFromStore = useSelector(selectSelectedMonetizations);
  const selectedStatusesFromStore = useSelector(selectSelectedStatuses);

  const [selectedNiches, setSelectedNiches] = useState(() => new Set(selectedNichesFromStore));
  const [selectedMonetizations, setSelectedMonetizations] = useState(() => new Set(selectedMonetizationsFromStore));
  const [selectedStatuses, setSelectedStatuses] = useState(() => new Set(selectedStatusesFromStore));

  const configRequestStatus = useSelector(selectRequestStatus);

  useEffect(
    () => {
      if(configRequestStatus === RequestStatus.notStarted) {
        dispatch(fetchEFConfig());
      }
    }, [dispatch, configRequestStatus]
  );  

  const toggleStatuses = (status: string) => {
    if(selectedStatuses.has(status)) {
      selectedStatuses.delete(status)      
    } else {
      selectedStatuses.add(status);
    }
    setSelectedStatuses(new Set(selectedStatuses));
  }

  const toggleNiches = (niche: string) => {
    if(selectedNiches.has(niche)) {
      selectedNiches.delete(niche)      
    } else {
      selectedNiches.add(niche);
    }
    setSelectedNiches(new Set(selectedNiches));
  }

  const toggleMonetization = (monetization: string) => {
    if(selectedMonetizations.has(monetization)) {
      selectedMonetizations.delete(monetization)      
    } else {
      selectedMonetizations.add(monetization);
    }
    setSelectedMonetizations(new Set(selectedMonetizations));
  }

  const onClickSaveFilters = () => {
    //check if there were any changes to the selections...
    if(!isArrayEqualToSet(selectedNichesFromStore, selectedNiches) || !isArrayEqualToSet(selectedMonetizationsFromStore, selectedMonetizations) || !isArrayEqualToSet(selectedStatusesFromStore, selectedStatuses)) {
      dispatch(setFilters(Array.from(selectedStatuses), Array.from(selectedNiches), Array.from(selectedMonetizations)));
    }
    onRequestClose();
  }

  return (
    <Fragment>
      {
        isOpen && displayOverlay && (<Overlay />)
      }
      <MainWrapper className={`${isOpen && 'open'}`}>
        <button onClick={(e) => onClickSaveFilters()}>Save Filters</button>
        <FilterGroup>
          <h3>Status</h3>
          <div className="options">
            {
              [[...statuses.slice(0, Math.ceil(statuses.length/2))], [...statuses.slice(Math.ceil(statuses.length/2))]].map(
                (statusesCol, index) => (
                  <div key={`niches-column-${index}`}>
                    {
                      statusesCol.map(
                        status => {
                          const id = `status-${status}`;
                          return (
                            <div key={status}>
                              <input id={id} type="checkbox" checked={selectedStatuses.has(status)} onChange={(e) => toggleStatuses(status)}/>
                              <label htmlFor={id}>{status}</label>
                            </div>
                          )
                        }
                      )
                    }
                  </div>
                )
              )
            }
          </div>
        </FilterGroup>
        <FilterGroup>
          <h3>Niche</h3>
          <div className="options">
            {
              [[...niches.slice(0, Math.ceil(niches.length/2))], [...niches.slice(Math.ceil(niches.length/2))]].map(
                (nichesColumn, index) => (
                  <div key={`niches-column-${index}`}>
                    {
                      nichesColumn.map(
                        niche => {
                          const id = `niche-${niche}`;
                          return (
                            <div key={niche}>
                              <input id={id} type="checkbox" checked={selectedNiches.has(niche)} onChange={(e) => toggleNiches(niche)}/>
                              <label htmlFor={id}>{niche}</label>
                            </div>
                          )
                        }
                      )
                    }
                  </div>
                )
              )
            }
          </div>
        </FilterGroup>
        <FilterGroup>
          <h3>Monetization</h3>
          <div className="options">
          {
            [[...monetizations.slice(0, Math.ceil(monetizations.length/2))], [...monetizations.slice(Math.ceil(monetizations.length/2))]].map(
              (monetizationsColumn, index) => (
                <div key={`monetizations-column-${index}`}>
                  {
                    monetizationsColumn.map(
                      monetization => {
                        const id = `monetization-${monetization}`;
                        return (
                          <div key={monetization}>
                            <input id={id} type="checkbox" checked={selectedMonetizations.has(monetization)} onChange={(e) => toggleMonetization(monetization)}/>
                            <label htmlFor={id}>{monetization}</label>
                          </div>
                        )
                      }
                    )
                  }
                </div>
              )
            )
          }
          </div>
        </FilterGroup>
      </MainWrapper>    
    </Fragment>
  );
}
