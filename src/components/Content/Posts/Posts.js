import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { changePage, totalPagesChange, getPosts } from '../../../actions';
//
import { MAIN_LIGHT, SECONDARY_LIGHT, MAIN_DARK, SECONDARY_DARK} from '../../../constants/color-scheme';
//
import scrollToTop from '../../../utils/scrollToTop';
import { MOBILE } from '../../../constants/rs-breakpoints';
//
import PostLoader from '../components/PostLoader';
import Pagination from '../components/Pagination';
import Post from './Post';

const PostsWrapper = styled.div`
  background-color: inherit;
  padding: 2rem;
  min-height: 100vh;
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
    color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK};
    @media screen and (max-width: ${MOBILE}px) {
      font-size: 1.2rem;
    }
  }
`;

const PostsList = styled.div`
  flex-grow: 1;
`;


const Posts = () => {

  const getPostsJSX = (posts) => {
    return posts.map((post, index) => {
      return <Post 
        key={post._id}
        id={post._id}
        title={post.title}
        tags={post.tags}
        createdAt={post.createdAt}
        lastEdited={post.lastEdited}
      />; 
    });
  };
  

  const dispatch = useDispatch();

  // STATE
  // posts
  const { posts, inTotal, isLoading, isError } = useSelector(state => state.posts);
  // pagination
  const { activePage, totalPages } = useSelector(state => state.pagination);
  // themeMode
  const themeMode = useSelector(state => state.themeMode);

  // HANDLERS 

  const onActivePageChange = (activePage) => {
    dispatch(changePage(activePage));
  };

  // LIFECYCLE 

  useEffect(() => {
    dispatch(getPosts(activePage));
    scrollToTop();
  }, [activePage]);

  useEffect(() => {
    if(inTotal) dispatch(totalPagesChange(inTotal));
  }, [inTotal]);


  // RENDER

  if(isError) return <h1>Տեղի ունեցավ սխալ ։(</h1>

  return (
    <PostsWrapper>
      <Header themeMode={themeMode}>
        <h2> <Icon name='clock outline' />Վերջին հրապարակումները</h2>
      </Header>
      <PostsList>
        {!isLoading? getPostsJSX(posts) : <PostLoader />}
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
