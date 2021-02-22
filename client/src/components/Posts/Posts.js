import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { changePage, totalPagesChange, getPosts } from '../../actions';
//
import PostLoader from './components/PostLoader';
import Pagination from './components/Pagination';
import Post from './Post/Post';

const PostsWrapper = styled.div`
  background-color: #f2f3f4 !important;
  padding: 2rem !important;
  min-height: 100%; 
  > header {
    max-width: 1200px !important;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PostsGrid = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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

  // posts

  const { posts, inTotal, isLoading, isError } = useSelector(state => state.posts);

  // pagination

  const { activePage, totalPages } = useSelector(state => state.pagination);

  const onActivePageChange = (activePage) => {
    console.info('onActivePageChange fired');
    console.log(`activePage = ${activePage}`);
    dispatch(changePage(activePage));
  };

  useEffect(() => {
    dispatch(getPosts(activePage));
  }, [activePage]);

  useEffect(() => {
    dispatch(totalPagesChange(inTotal));
  }, [inTotal]);


  if(isError) {
    return <h1>Տեղի ունեցավ սխալ ։(</h1>
  }

  return (
    !isLoading ? (
      <PostsWrapper>
        <header>
          <h2>Վերջին հրապարակումները</h2>
        </header>
        <PostsGrid>
          {getPostsJSX(posts)}
        </PostsGrid>
        <Pagination 
          activePage={activePage} 
          totalPages={totalPages}
          onActivePageChange={onActivePageChange}
        />
      </PostsWrapper>  
    ) : <PostLoader />
  )
};

export default Posts;
