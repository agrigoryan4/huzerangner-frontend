import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

const FacebookComments = ({ url }) => {
  const fbAppId = process.env.REACT_APP_FB_APP_ID;
  return (
    <FacebookProvider appId={fbAppId}>
      <Comments href={url} />
    </FacebookProvider>
  );
};

export default FacebookComments;
