import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import parseHTML from 'html-react-parser';
import { useParams } from 'react-router-dom';
import api from '../../../api';
import scrollToTop from '../../../utils/scrollToTop';
//
import PostLoader from '../components/PostLoader';
import Tags from '../components/Tags';
import ShareSingle from './ShareSingle.js';
import TimeFormatted from '../components/TimeFormatted';

const Wrapper = styled.div`
  background-color: #fafafa;
  max-width: 800px;
  margin: 0 auto 2rem auto; 
`

const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
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
    box-shadow: 10px 10px 10px 0px rgba(235,235,235,1);
    border-top: 2px solid #fff;
    border-right: 2px solid #dadada;
    border-bottom: 2px solid #dadada;
    border-left: 2px solid #fff;
    h2 {
      margin: 0.6rem auto;
      font-size: 2rem;
    }
  }
  > footer {
    opacity: 0.8;
  }
`;

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start; 
  }
`;

const PostSingle = () => {
  const { postId } = useParams(); 

  const initialState = {
    _id: null,
    title: null,
    body: '',
    tags: null,
    createdAt: null,
    lastEdited: null,
  }
  const [ postData, setPostData ] = useState(initialState);

  const getSingle = async () => {
    const res = await api.getPostSingle(postId);
    const { _id, title, body, tags, createdAt, lastEdited } = res.data;
    setPostData({ _id, title, body, tags, createdAt, lastEdited });
  };

  useEffect(() => {
    scrollToTop()
    getSingle();
  }, []);

  const { _id, title, body, tags, createdAt, lastEdited } = postData;
  return (
    _id ? (
      <Wrapper>
        <StyledPost>
        <header>
          <Tags tags={tags} />
          <h2 className='animate__animated animate__fadeInDown'>{title}</h2>
        </header>
        <div>
          {parseHTML(body)}
        </div>
        <footer>
          <FooterContentWrapper>
            <div>ստեղծված է՝ <TimeFormatted timeStamp={createdAt} /></div>
            {(createdAt !== lastEdited) && <div>թարմացված է <TimeFormatted timeStamp={lastEdited} relative /></div>}
          </FooterContentWrapper>
        </footer>
        <ShareSingle title={title} url={window.location.href} />
      </StyledPost>
    </Wrapper>
    ) : <PostLoader />
  );
};

export default PostSingle;
