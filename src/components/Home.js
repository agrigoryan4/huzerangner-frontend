import React, { useEffect } from 'react';
import styled from 'styled-components';
// redux
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// constants
import { MAIN_DARK, MAIN_LIGHT } from '../constants/color-scheme';
// utils
import setQueryParams from '../utils/setQueryParams';
// components
import Head from './Head';
import Bottom from './Bottom';
import Content from './Content';

const PageWrapper = styled.div`
  background-color: ${props => props.themeMode === 'dark' ? MAIN_DARK : MAIN_LIGHT };
`;

const Home = () => {
  const themeMode = useSelector(state => state.themeMode);
  const { currentQuery } = useSelector(state => state.search);
  const { activePage, totalPages } = useSelector(state => state.pagination);

  useEffect(() => {
    if (currentQuery) setQueryParams('query', currentQuery);
    setQueryParams('page', activePage);
  }, [currentQuery, activePage]);

  return (
    <Router>
      <PageWrapper themeMode={themeMode}> 
        <Head />
        <Content />
        <Bottom />
      </PageWrapper>
    </Router>
    
  )
};

export default Home;
