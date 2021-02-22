import React from 'react';
import styled from 'styled-components';
import { Label } from 'semantic-ui-react';

const Tags = styled.div`
  display: flex;
  align-items: start;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;


const Labels = ({ tags }) => {

  const renderTags = (tags) => {
    if(!tags) return null;
    return tags.map(tag => <Label as='span'>#{tag}</Label>);
  };

  return (
    <Tags>
      {renderTags(tags)}
    </Tags>
  )
};

export default Labels;
