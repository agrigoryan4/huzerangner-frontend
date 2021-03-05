import React from 'react';
import styled from 'styled-components';
// redux
import { useSelector } from 'react-redux';
// facebook
import { Like  } from 'react-facebook';

const LikeWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow: hidden;
  justify-content: flex-start;
`;

const FacebookLikes = ({ url }) => {
  const themeMode = useSelector(state => state.themeMode);
  return (
    <LikeWrapper>
      <Like  
        href={url} 
        colorScheme={themeMode === 'dark' ? 'dark' : 'light'} 
        showFaces
        share
        width={300}
      />
    </LikeWrapper>
  );
};

export default FacebookLikes;
