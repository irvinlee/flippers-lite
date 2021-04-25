import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setSearchQueryValue } from '../redux/actions';

const Wrapper = styled.div`
  padding: 0 15px;
`;

export default function SearchBox() {
  const dispatch = useDispatch();
  
  const [query, setQuery] = useState<string>('');

  const doSearch = () => {
    dispatch(setSearchQueryValue(query))
  };

  return (
    <Wrapper>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search Listings"
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            doSearch();
          }
        }}
      />
      <button onClick={() => doSearch()}>Search</button>
    </Wrapper>
  );
}
