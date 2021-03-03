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
  h2: {
    @media screen and (max-width: ${MOBILE}px) {
      font-size: ${h2FontSizeMobile};
    }
  }
  .content-wrapper {
    .read-also {
      margin: 1rem auto;
    }
    .other-relevant {
      display: flex;
      flex-direction: column;
      align-items: start;
      > * {
        margin-top: 1rem;
        margin-bottom: 1rem;
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
    posts: {
      readThis: null,
      relevant: null
    }
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
        posts: {
          readThis: results.data[0],
          relevant: results.data.splice(1)
        }
      })
    }
  };

  // LIFECYCLE

  useEffect(() => {
    getRelevantPosts(postId);
  }, [])

  if(relevantPosts.isError) return <h2>Տեղի ունեցավ սխալ ։(</h2>

  return (
    <SeeAlsoWrapper themeMode={themeMode} >
      <div className='content-wrapper'>
        <h2>Կարդացեք նաև</h2>
        <div className='read-also'>
          { relevantPosts.isReady ? getRelevantPostsJSX(relevantPosts.posts.readThis) : null }
        </div>
        <h2>Նմատատիպ</h2>
        <div className='other-relevant'>
          { relevantPosts.isReady ? getRelevantPostsJSX(relevantPosts.posts.relevant) : null}
        </div>
      </div>
    </SeeAlsoWrapper>
  );
};

export default SeeAlso;
