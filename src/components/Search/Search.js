import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Input } from 'semantic-ui-react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { changePage, changeSearchQuery } from '../../actions';
// constants
import { h2FontSizeSMALL } from '../../constants/conventions';
import { SMALL } from '../../constants/rs-breakpoints';
import { MAIN_LIGHT, MAIN_DARK } from '../../constants/color-scheme';


const SearchWrapper = styled.div`
  max-width: 100%;
  > h2 {
    color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK };
    @media screen and (max-width: ${SMALL}px) {
      font-size: ${h2FontSizeSMALL};
    }
  }
  form {
    display: flex;
    width: 100%;
    > * {
      height: 40px;
      outline: none;
      border: 1px solid rgba(0,0,0, 0.4);
    }
    > input {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 1rem;
      flex-grow: 1;
    }
    > button {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`; 


const Search = () => {

  // REDUX

  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.themeMode);

  // STATE

  const [ query, setQuery ] = useState('');

  // HANDLERS

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(changeSearchQuery(query));
    dispatch(changePage(1));
  };

  return (
    <SearchWrapper themeMode={themeMode}>
      <h2><Icon name='search' /> Որոնել</h2>
      <form>
        <input
          value={query}
          onChange={(e) => handleChange(e)}
          placeholder='Հրապարակման անուն․․․' 
        />
        <button onClick={handleSearch}><Icon name='search' /></button>
      </form>
    </SearchWrapper>
  );
};

export default Search;
