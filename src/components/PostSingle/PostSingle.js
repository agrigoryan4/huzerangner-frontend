import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import parseHTML from 'html-react-parser';
import { useParams } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// constants
import { MAIN_LIGHT, SECONDARY_LIGHT, MAIN_DARK, SECONDARY_DARK } from '../../constants/color-scheme';
import { SMALL, MEDIUM } from '../../constants/rs-breakpoints';
// api
import api from '../../api';
// utils
import scrollToTop from '../../utils/scrollToTop';
// social
import ShareSingle from './ShareSingle.js';
import FacebookComments from './Facebook/Comments';
// components
import Tags from '../components/Tags';
import TimeFormatted from '../components/TimeFormatted';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const StyledPost = styled.article`
  background-color: ${props => props.themeMode === 'dark' ? SECONDARY_DARK : SECONDARY_LIGHT};
  color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK};
  width: 100%;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  margin: 2rem 1rem;
  @media screen and (max-width: ${MEDIUM}px) {
    margin: 1rem 1rem;
  }
  > * {
    margin: 1rem 2rem;
    padding: 1rem;
  }
  img {
    width: 100%;
    margin: 1rem auto;
  }
  p {
    font-size: 1.1rem;
  }
  > header {
    box-shadow: ${props => props.themeMode === 'dark' ? 'none' : '10px 10px 10px 0px rgba(235,235,235,1)'};
    border-top: ${props => props.themeMode === 'dark' ? 'none' : '2px solid #fff'};
    border-right: ${props => props.themeMode === 'dark' ? 'none' : '2px solid #dadada'};
    border-bottom: 2px solid #dadada;
    border-left: ${props => props.themeMode === 'dark' ? 'none' : '2px solid #fff'};
    h2 {
      margin: 0.6rem auto;
      font-size: 1.6rem;
    }
  }
  > footer {
    opacity: 0.8;
    > div {
      @media screen and (max-width: ${SMALL}px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${SMALL}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PostSingle = () => {
  const { postId } = useParams(); 
  
  // REDUX

  const themeMode = useSelector(state => state.themeMode);

  // STATE

  const initialState = {
    isLoading: false,
    isReady: false,
    isError: false,
    post: {
      _id: null,
      title: null,
      body: '',
      tags: null,
      createdAt: null,
      lastEdited: null,
    }
  }
  const [ postData, setPostData ] = useState(initialState);

  // API

  const getSingle = async () => {
    let res;
    try {
      setPostData({ ...postData, isLoading: true, isReady: false, isError: false });
      res = await api.getPostSingle(postId);
    } catch (error) {
      setPostData({ ...postData, isLoading: false, isReady: false, isError: true });
    }
    if(res) {
      setPostData({ isLoading: false, isError: false, isReady: true, post: res.data });
    }
  };

  // LIFECYCLE

  useEffect(() => {
    scrollToTop()
    getSingle();
  }, [postId]);

  // RENDER

  const { isLoading, isReady, isError } = postData;
  const { _id, title, body, tags, createdAt, lastEdited } = postData.post;
  return (
    <Wrapper>
      <StyledPost themeMode={themeMode} >
        <header>
          {!isLoading && isReady ? <Tags tags={tags} themeMode={themeMode} /> : <Skeleton />}
          {!isLoading && isReady ? <h2 className='animate__animated animate__fadeInDown'>{title}</h2> : <Skeleton />}
        </header>
        <div>
          {!isLoading && isReady ? parseHTML(body) : <Skeleton count={10} />}
        </div>
        <footer>
          {!isLoading && isReady ? (
            <FooterContentWrapper>
              <div>հրապարակված է՝ <TimeFormatted timeStamp={createdAt} /></div>
              {(createdAt !== lastEdited) && <div>վերջին խմբագրումը՝ <TimeFormatted timeStamp={lastEdited} relative /></div>}
            </FooterContentWrapper>
          ) : <Skeleton />}
        </footer>
        <ShareSingle title={title} url={window.location.href} />
        <FacebookComments url={window.location.href} />
      </StyledPost>
    </Wrapper>
  );
};

export default PostSingle;
