import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const PagesWrap = styled.div`
  width:100%;
  height:100%;
  background:transparent;
`

function Pages() {
  return (
    <PagesWrap>
      
      <Outlet />
    </PagesWrap>
  );
}

export default Pages;
