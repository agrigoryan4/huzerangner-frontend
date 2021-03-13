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
import { EXTRA_SMALL, SMALL } from '../../constants/rs-breakpoints';

const Wrapper = styled.header`
  @media screen and (min-width: ${EXTRA_SMALL}px) {
    position: sticky;
    top: 0;
    z-index: 999;
  }
`;

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
  @media screen and (min-width: ${EXTRA_SMALL}px) {
    flex-direction: row;
  }
  > img, > h2 {
    margin: 4px;
  }
  > img {
    height: auto;
    min-width: 200px;
    max-width: 18%;
    @media screen and (max-width: ${SMALL}px) {
      max-width: 60%;
    }
  }
  > h2 {
    color: inherit;
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.9;
    @media screen and (max-width: ${SMALL}px) {
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
    <Wrapper>
      <Link to='/' onClick={headClickHandler}>
        <HeadWrapper>
          <img src={logo} alt='website logo'/>
          {/* <h1>Հուզերանգներ</h1> */}
          <h2>Հ․ Ղուկասյանի հեղինակային բլոգը</h2>
        </HeadWrapper>
      </Link>
    </Wrapper>
  )
}

export default Head;
