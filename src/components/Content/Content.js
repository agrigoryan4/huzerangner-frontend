import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import { FacebookProvider, Comments } from 'react-facebook';
import Posts from './Posts';
import PostSingle from './PostSingle';

const ContentWrapper = styled.div`
  height: max-content;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = () => {
  const fbAppId = process.env.REACT_APP_FB_APP_ID;
  return (
    <FacebookProvider appId={fbAppId}>
      <ContentWrapper>
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
      </ContentWrapper>
    </FacebookProvider>
    );
};

export default Content;
