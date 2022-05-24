import GridArea from '@/components/common/grid-area';
import Xpanel from '@/components/common/xpanel';
import React from 'react';
import styled from 'styled-components';
import T5Block from './T5Block';
import T6Block from './T6Block';
import T7Block from './T7Block';


const T4BlockInner = styled.div`
  display:grid;
  grid-template-areas:
    "t5" 
    "t6"
    "t7";

    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr 1fr;
    grid-gap: 24px;
    width:100%;
    height:100%;
`

function T4Block() {
  return (
    <GridArea area='t4'>
      <T4BlockInner>
        <T5Block />
        <T6Block />
        <T7Block />
      </T4BlockInner>
    </GridArea>
   
  );
}

export default T4Block;
