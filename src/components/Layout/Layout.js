import React from 'react';
import styled from 'styled-components';
// constants
import { SMALL, MEDIUM } from '../../constants/rs-breakpoints';
// componenets
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import Search from '../Search'; 
import Tags from '../Tags/Tags';
import PostSingle from '../PostSingle';
import SeeAlso from '../SeeAlso';

const HomeLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 12fr 2fr;
  @media screen and (max-width: ${MEDIUM}px) {
    grid-template-columns: 1fr;
  }
`;

const SingleLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr 4fr;
  @media screen and (max-width: ${MEDIUM}px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
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
        <Sidebar />
        <PostSingle />
        <Sidebar>
          <SeeAlso />
        </Sidebar>
      </SingleLayout>
    )
  }
  return (
    <Posts />
  );
};

export default Layout;
