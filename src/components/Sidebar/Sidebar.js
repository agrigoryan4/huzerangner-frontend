import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  > * {
    margin: 2rem;
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
