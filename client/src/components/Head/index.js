import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HeadWrapper = styled.div`
  background-color: #151515;
  color: #fafafa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img, > h2 {
    margin: 4px;
  }
  > img {
    height: 50px;
  }
  > h2 {
    color: inherit;
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
          <img src={logo} alt='website logo' className='animate__animated animate__pulse'/>
          {/* <h1>Հուզերանգներ</h1> */}
          <h2 className='animate__animated animate__pulse'>Հ․ Ղուկասյանի հեղինակային բլոգը</h2>
        </HeadWrapper>
      </Link>
    </header>
  )
}

export default Head;
