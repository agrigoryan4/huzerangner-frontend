import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// redux
import { useSelector } from 'react-redux';
// api
import api from '../../api';
// contants
import { MOBILE } from '../../constants/rs-breakpoints';
import { h2FontSizeMobile } from '../../constants/conventions';
import { MAIN_LIGHT, MAIN_DARK, SECONDARY_LIGHT, SECONDARY_DARK } from '../../constants/color-scheme';
// components
import Post from './Post';

const SeeAlsoWrapper = styled.div`
  color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK};
  position: sticky;
  top: 2rem;
  Թmedia screen and (max-width: ${MOBILE}px) {
    position: static;
    top: auto;
  }
  h2: {
    @media screen and (max-width: ${MOBILE}px) {
      font-size: ${h2FontSizeMobile};
    }
  }
  .content-wrapper {
    .relevant {
      display: flex;
      flex-direction: column;
      align-items: start;
      > * {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      > *:first-child {
        padding-bottom: 1rem;
        border-bottom: 4px solid ${props => props.themeMode === 'dark' ? SECONDARY_LIGHT : SECONDARY_DARK }; 
      }
    }
  }
`;

const SeeAlso = () => {
  const { postId } = useParams(); 

  // REDUX

  const themeMode = useSelector(state => state.themeMode);

  // UTILS

  const getRelevantPostsJSX = (relevantPosts) => {
    if(!relevantPosts) return null;
    let result;
    if(Array.isArray(relevantPosts)) {
      result = relevantPosts.map((post, index) => {
        return <Post key={post._id} id={post._id} title={post.title} />;
      });
    }
    else {
      const showcasePost = relevantPosts;
      result = <Post key={showcasePost._id} id={showcasePost._id} title={showcasePost.title} />;
    }
    
    return result;
  };

  // STATE

  const initialState = {
    isError: false,
    isReady: false,
    posts: [],
  }
  const [relevantPosts, setRelevantPosts] = useState(initialState);

  // API
  
  const getRelevantPosts = async (postId) => {
    let results; 
    try {
      results = await api.getSimilarPosts(postId);
    } catch (error) {
      setRelevantPosts({ ...relevantPosts, isError: true });
    }
    if(results) {
      setRelevantPosts({
        isError: false,
        isReady: true,
        posts: results.data
      });
    }
  };

  // LIFECYCLE

  useEffect(() => {
    getRelevantPosts(postId);
  }, [postId]);

  if(relevantPosts.isError) return <h2>Տեղի ունեցավ սխալ ։(</h2>;

  return (
    <SeeAlsoWrapper themeMode={themeMode} >
      <div className='content-wrapper'>
        <h2>Կարդացեք նաև</h2>
        <div className='relevant'>
          { relevantPosts.isReady ? getRelevantPostsJSX(relevantPosts.posts) : null }
        </div>
      </div>
    </SeeAlsoWrapper>
  );
};

export default SeeAlso;
