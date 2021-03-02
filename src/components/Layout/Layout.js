import React from 'react';
import styled from 'styled-components';
// constants
import { MOBILE } from '../../constants/rs-breakpoints';
// componenets
import Posts from '../Posts';
import PostSingle from '../PostSingle';
import Sidebar from '../Sidebar';
import Search from '../Search';
import Tags from '../Tags/Tags';

const HomeLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 12fr 2fr;
  @media screen and (max-width: ${MOBILE}px) {
    grid-template-columns: 1fr;
  }
`;

const SingleLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
`;

const Layout = ({ layout }) => {
  if(layout === 'home') {
    return (
      <HomeLayout>
        <Sidebar>
          <Search />
          <Tags />
        </Sidebar>
        <Posts />
        <Sidebar>
        </Sidebar>
      </HomeLayout>
    )
  }
  else if (layout === 'single') {
    return (
      <SingleLayout>
        <PostSingle />
      </SingleLayout>
    )
  }
  return (
    <Posts />
  );
};

export default Layout;
