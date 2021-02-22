import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tags from '../components/Tags';

const ArticleStyled = styled.div`
  background-color: #fff !important;
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
  }
  footer {
    background-color: #f8f8f8;
    margin-top: 0.5rem;
    padding: 4px;
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
        <span>վերջին թարմացումը՝ {lastEdited} </span>
        <span>ստեղծված է՝ {createdAt}</span>
      </footer>
    </ArticleStyled>
  );
};

export default Post;