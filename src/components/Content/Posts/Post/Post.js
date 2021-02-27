import React from 'react';
import styled from 'styled-components';
// redux
import { useSelector } from 'react-redux';
//
import { MAIN_LIGHT, SECONDARY_LIGHT, MAIN_DARK, SECONDARY_DARK } from '../../../../constants/color-scheme';
//
import { Link } from 'react-router-dom';
import Tags from '../../components/Tags';
import TimeFormatted from '../../components/TimeFormatted';

const ArticleStyled = styled.div`
  background-color: inherit;
  color: ${props => props.themeMode === 'dark' ? SECONDARY_LIGHT : SECONDARY_DARK};
  border: 1px solid ${props => props.themeMode === 'dark' ? '#202020' : '#dadada'};
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
    }
    a {
      color: ${props => props.themeMode === 'dark' ? 'inherit' : 'auto'};;
    }
  }
  footer {
    background-color: ${props => props.themeMode === 'dark' ? SECONDARY_DARK : SECONDARY_LIGHT};
    margin-top: 0.5rem;
    padding: 0.3rem 0.5rem;
    border-top: 1px solid #dadada;
    opacity: 0.9;
    text-align: right;
  }
`;

const Post = ({ id, title, body, tags, createdAt, lastEdited }) => {
  const themeMode = useSelector(state => state.themeMode);
  return (
    <ArticleStyled themeMode={themeMode} >
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
