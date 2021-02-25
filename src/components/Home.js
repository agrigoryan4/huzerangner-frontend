import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Head from './Head';
import Bottom from './Bottom';
import Content from './Content';

const PageWrapper = styled.div`
  background-color: #fff;
`;

const Home = () => {
  return (
    <Router>
      <PageWrapper> 
        <Head />
        <Content />
        <Bottom />
      </PageWrapper>
    </Router>
    
  )
};

export default Home;
