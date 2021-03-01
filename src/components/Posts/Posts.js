import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { changePage, totalPagesChange, getPosts } from '../../actions';
// constants
import { MAIN_LIGHT, MAIN_DARK} from '../../constants/color-scheme';
import { POSTS_PER_PAGE } from '../../constants';
// utils
import scrollToTop from '../../utils/scrollToTop';
import { MOBILE } from '../../constants/rs-breakpoints';
// components
import Pagination from '../components/Pagination';
import Post from './Post';

const PostsWrapper = styled.div`
  background-color: inherit;
  color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK};
  max-width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  > header {
    font-size: 0.2rem;
  }
  > *:last-child {
    margin-bottom: 0; 
    align-self: start;
  }
`;

const Header = styled.div`
  > h2 {
    @media screen and (max-width: ${MOBILE}px) {
      font-size: 1.2rem;
    }
  }
`;

const PostsList = styled.div`
  flex-grow: 1;
`;


const Posts = () => {

  const getPostsJSX = (posts, loading) => {
    
    let postsArray = posts;
    if(loading) {
      postsArray = new Array(POSTS_PER_PAGE);
      for(let i=0; i<POSTS_PER_PAGE; i++) {
        postsArray[i] = {};
      }
    }
    return postsArray.map((post, index) => {
      return <Post 
        key={post._id}
        id={post._id}
        title={post.title}
        tags={post.tags}
        createdAt={post.createdAt}
        lastEdited={post.lastEdited}
        isLoading={loading}
      />; 
    });
  };
  

  const dispatch = useDispatch();

  // STATE
  // themeMode
  const themeMode = useSelector(state => state.themeMode);
  // pagination
  const { activePage, totalPages } = useSelector(state => state.pagination);
  // query
  const { currentQuery } = useSelector(state => state.search);
  // posts
  const { posts, inTotal, isLoading, isError } = useSelector(state => state.posts);
  

  // HANDLERS 

  const onActivePageChange = (activePage) => {
    dispatch(changePage(activePage));
  };

  // LIFECYCLE 

  useEffect(() => {
    dispatch(getPosts(activePage, currentQuery));
    scrollToTop();
  }, [activePage, currentQuery]);

  useEffect(() => {
    if(inTotal >= 1) dispatch(totalPagesChange(inTotal));
  }, [inTotal]);


  // RENDER

  // on error
  if(isError) return <h1>Տեղի ունեցավ սխալ ։(</h1>

  return (
    <PostsWrapper themeMode={themeMode} >
      {/* <Search /> */}
      <Header themeMode={themeMode}>
        <h2> <Icon name='clock outline' />Վերջին հրապարակումները</h2>
      </Header>
      {inTotal === 0 ? (<h4>Հրապարակումներ չգտնվեցին</h4>) : null}
      <PostsList>
        {getPostsJSX(posts, isLoading)}
      </PostsList>
      <Pagination 
        darkMode={themeMode === 'dark'}
        activePage={activePage} 
        totalPages={totalPages}
        onActivePageChange={onActivePageChange}
      />
    </PostsWrapper>
  );
};

export default Posts;
