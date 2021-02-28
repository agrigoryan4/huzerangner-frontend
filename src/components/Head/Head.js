import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// redux
import { useDispatch } from 'react-redux';
import { changePage, changeSearchQuery } from '../../actions';
// assets
import logo from '../../assets/logo.png';
import blackPattern from '../../assets/black-Linen/black-Linen_@2X.png';
// constants
import { MOBILE } from '../../constants/rs-breakpoints';

const HeadWrapper = styled.div`
  background-color: #202020;
  background-image: url(${blackPattern});
  background-repeat: repeat;
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
    height: auto;
    min-width: 200px;
    max-width: 18%;
    @media screen and (max-width: ${MOBILE}px) {
      max-width: 60%;
    }
  }
  > h2 {
    color: inherit;
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.9;
    @media screen and (max-width: ${MOBILE}px) {
      font-size: 0.9rem;
    }
  }
`;

const Head = () => {
  const dispatch = useDispatch();

  const headClickHandler = () => {
    dispatch(changeSearchQuery(null));
    dispatch(changePage(1));
  };

  return (
    <header>
      <Link to='/' onClick={headClickHandler}>
        <HeadWrapper>
          <img src={logo} alt='website logo'/>
          {/* <h1>Հուզերանգներ</h1> */}
          <h2>Հ․ Ղուկասյանի հեղինակային բլոգը</h2>
        </HeadWrapper>
      </Link>
    </header>
  )
}

export default Head;
