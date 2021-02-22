import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import Head from './Head/Head';
import Posts from './Posts/Posts';
import PostSingle from './Posts/PostSingle/PostSingle';

const PageWrapper = styled.div`
  background-color: #fff;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Router>
      <PageWrapper> 
        <Head />
        <Switch>
          <Route path='/posts/post/:postId'>
            <PostSingle />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/'>
            <Posts />
          </Route>
        </Switch>
      </PageWrapper>
    </Router>
    
  )
};

export default Home;
