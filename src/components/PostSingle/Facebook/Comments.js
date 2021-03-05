import React from 'react';
// redux
import { useSelector } from 'react-redux';
// facebook
import { Comments } from 'react-facebook';

const FacebookComments = ({ url }) => {
  const themeMode = useSelector(state => state.themeMode);
  return (
      <Comments
        href={url} 
        colorScheme={themeMode === 'dark' ? 'dark' : 'light'} 
      />
  );
};

export default FacebookComments;
