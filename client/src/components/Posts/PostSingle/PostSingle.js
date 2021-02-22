import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import parseHTML from 'html-react-parser';
import { useParams } from 'react-router-dom';
import api from '../../../api';
import PostLoader from '../components/PostLoader';
import Tags from '../components/Tags';

const Wrapper = styled.div`
  background-color: #fafafa;
  max-width: 800px;
  margin: 1rem auto; 
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
    box-shadow: 10px 10px 5px 0px rgba(235,235,235,1);
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


const PostSingle = () => {
  const { postId } = useParams(); 

  const initialState = {
    _id: null,
    title: null,
    body: '',
    tags: null,
    createdAt: null,
  }
  const [ postData, setPostData ] = useState(initialState);

  const getSomePost = async () => {
    const res = await api.getPostSingle(postId);
    const { _id, title, body, tags, createdAt } = res.data;
    setPostData({ _id, title, body, tags, createdAt });
  };

  useEffect(() => {
    getSomePost();
  }, []);

  return (
    postData._id ? (
      <Wrapper>
        <StyledPost>
        <header>
          <Tags tags={postData.tags} />
          <h2>{postData.title}</h2>
        </header>
        <div>
          {parseHTML(postData.body)}
        </div>
        <footer>
          ստեղծվել է՝ {postData.createdAt}
        </footer>
      </StyledPost>
    </Wrapper>
    ) : <PostLoader />
  );
};

export default PostSingle;
