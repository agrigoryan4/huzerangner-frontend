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


const Labels = ({ tags, themeMode }) => {

  const renderTags = (tags) => {
    if(!tags) return null;
    return tags.map(tag => tag ? (
    <Label as='span' color={ themeMode === 'dark' ? 'black' : null} >
      #{tag}
    </Label>
    ) : null);
  };

  return (
    <Tags>
      {renderTags(tags)}
    </Tags>
  )
};

export default Labels;
