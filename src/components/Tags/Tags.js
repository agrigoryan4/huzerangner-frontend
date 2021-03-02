import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Label, Dropdown } from 'semantic-ui-react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { changePage, changeSearchQuery } from '../../actions';
// constants
import { h2FontSizeMobile } from '../../constants/conventions';
import { MOBILE } from '../../constants/rs-breakpoints';
import { MAIN_LIGHT, MAIN_DARK } from '../../constants/color-scheme';
// utils
import isMobile from '../../utils/isMobile';
// api
import api from '../../api';

const TagsWrapper = styled.div`
  color: ${props => props.themeMode === 'dark' ? MAIN_LIGHT : MAIN_DARK };
  max-width: 100%;
  h2 {
    @media screen and (max-width: ${MOBILE}px) {
      font-size: ${h2FontSizeMobile};
    }
  }
`;

const Tags = () => {

  const themeMode = useSelector(state => state.themeMode);

  const dispatch = useDispatch();

  // HANDLERS
  const onDropdownChange = (event, data) => {
    const selectedTagValue = data.value;
    if(selectedTagValue) dispatch(changeSearchQuery(`tag:${selectedTagValue}`));
    else dispatch(changeSearchQuery(null));
    dispatch(changePage(1));
  };

  // UTILS
  const getDropdownOptions = (tagsArray) => {
    if(!tagsArray) return null;
    // sort the tags in descending order
    const sortedTagsArray = tagsArray.sort((tag1, tag2) => {
      if(tag1.postsNumber > tag2.postsNumber) return -1;
      else return 1;
    });
    // convert to a semantic ui dropdown options object
    let tags = [];
    sortedTagsArray.forEach((elem, index) => {
      tags.push({ 
        key: elem.tag, 
        value: elem.tag, 
        text: `#${elem.tag}`,
        label: (
          <Label
            circular
            color='grey'
            size={'mini'}
          >
            {elem.postsNumber}
          </Label>
        )
      });
    });
    return tags;
  };

  // STATE
  const [tags, setTags] = useState();
  
  // API
  const fetchTags = async () => {
    const tagsArray = await api.getTags();
    setTags(tagsArray.data);
  };

  // LIFECYCLE
  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <TagsWrapper themeMode={themeMode}>
      <h2>Թեգեր</h2>
      <Dropdown
        placeholder='Ընտրեք թեգը․․․'
        clearable
        // open by default on desktop
        defaultOpen={!isMobile()}
        closeOnBlur
        closeOnChange
        search
        selection
        options={getDropdownOptions(tags)}
        onChange={onDropdownChange}
      />
    </TagsWrapper>
  );
};

export default Tags;
