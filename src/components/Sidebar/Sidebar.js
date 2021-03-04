import React from 'react';
import styled from 'styled-components';
// contants
import { MOBILE } from '../../constants/rs-breakpoints';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 1rem;
  > * {
    margin: 2rem;
    @media screen and (max-width: ${MOBILE}px) {
      margin: 1rem 2rem;
    }
  }
`;

const Sidebar = (props) => {
  return (
    <SideBarWrapper>
      {props.children}
    </SideBarWrapper>
  );
};

export default Sidebar;
