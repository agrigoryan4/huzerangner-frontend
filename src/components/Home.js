import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//
import { MAIN_DARK, MAIN_LIGHT } from '../constants/color-scheme';
//
import Head from './Head';
import Bottom from './Bottom';
import Content from './Content';

const PageWrapper = styled.div`
  background-color: ${props => props.themeMode === 'dark' ? MAIN_DARK : MAIN_LIGHT };
`;

const Home = () => {
  const themeMode = useSelector(state => state.themeMode); 

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
