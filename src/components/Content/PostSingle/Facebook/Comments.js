import React from 'react';
// redux
import { useSelector } from 'react-redux';
//
import { FacebookProvider, Comments } from 'react-facebook';

const FacebookComments = ({ url }) => {
  const themeMode = useSelector(state => state.themeMode);
  const fbAppId = process.env.REACT_APP_FB_APP_ID;
  return (
    <FacebookProvider appId={fbAppId}>
      <Comments href={url} data-colorscheme={themeMode === 'dark' ? 'dark' : 'light'} />
    </FacebookProvider>
  );
};

export default FacebookComments;
