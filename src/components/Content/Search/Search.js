import React, { useState } from 'react';
import styled from 'styled-components';
// redux
import { useDispatch } from 'react-redux';
import { changePage, changeSearchQuery } from '../../../actions';
//

const SearchWrapper = styled.div`
  margin: 2rem auto 2rem 0;
  input, button {
    height: 40px;
    outline: none;
    border: 1px solid;
    border-radius: 2px;
  }
`; 

const Search = () => {
  const [ query, setQuery ] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(changeSearchQuery(query));
    dispatch(changePage(1));
  };

  return (
    <SearchWrapper>
      <form>
        <input 
          type='text' 
          placeholder='Հրապարակման անուն․․․' 
          value={query}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleSearch}>Որոնել</button>
      </form>
    </SearchWrapper>
  );
};

export default Search;
