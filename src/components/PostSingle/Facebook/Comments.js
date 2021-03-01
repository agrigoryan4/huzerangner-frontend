import React from 'react';
// redux
import { useSelector } from 'react-redux';
//
import { FacebookProvider, Comments } from 'react-facebook';

const FacebookComments = ({ url }) => {
  const themeMode = useSelector(state => state.themeMode);
  return (
      <Comments href={url} data-colorscheme={themeMode === 'dark' ? 'dark' : 'light'} />
  );
};

export default FacebookComments;
