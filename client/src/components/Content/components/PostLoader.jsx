import React from 'react';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostLoader = () => {
  return (
    <LoaderWrapper>
      <Loader 
        type='Watch'
        color='#a9a9a9'
        height={100}
        width={100}
      />
    </LoaderWrapper>
  );
};

export default PostLoader;