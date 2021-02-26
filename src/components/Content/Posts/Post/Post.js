import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tags from '../../components/Tags';
import TimeFormatted from '../../components/TimeFormatted';

const ArticleStyled = styled.div`
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 4px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  > * {
    &:first-child {
      padding-top: 1rem;
    }
    padding-left: 1rem;
    padding-right: 1rem;
  } 
  header {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      z-index: -1;
    }
    position: relative;
    &:after {
      content: '';
      background: linear-gradient(to right,  rgba(256, 256, 256, 0) 0%,rgba(256,256,256,1) 100%);
      display: block;
      width: 60px;
      height: 2rem;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  footer {
    background-color: #f8f8f8;
    margin-top: 0.5rem;
    padding: 0.3rem 0.5rem;
    border-top: 1px solid #dadada;
    opacity: 0.9;
    text-align: right;
  }
`;

const Post = ({ id, title, body, tags, createdAt, lastEdited }) => {
  return (
    <ArticleStyled>
      <Tags tags={tags} />
      <header>
        <Link to={`/posts/post/${id}`}>
          <h3>{title}</h3>
        </Link>
      </header>
      <footer>
        <span>
          <TimeFormatted timeStamp={createdAt} relative />
        </span>
      </footer>
    </ArticleStyled>
  );
};

export default Post;
