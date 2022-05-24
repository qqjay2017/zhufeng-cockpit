import React from 'react';
import styled from 'styled-components';

const GridArea = styled.div<{area:string}>`
  grid-area: ${(p)=>p.area};
   width: 100%;
   height:100%;
`



export default GridArea;
