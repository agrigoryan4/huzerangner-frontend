import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeadWrapper = styled.div`
  background-color: #151515;
  color: #fafafa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1, >h2 {
    color: inherit !important;
    margin: 4px;
  }
  > h1 {
    font-size: 2rem;
  }
  > h2 {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.9;
  }
`;

const Head = () => {
  return (
    <header>
      <Link to='/posts' >
        <HeadWrapper>
          <h1>Հուզերանգներ</h1>
          <h2>Հ․ Ղուկասյանի հեղինակային բլոգը</h2>
        </HeadWrapper>
      </Link>
    </header>
  )
}

export default Head;
