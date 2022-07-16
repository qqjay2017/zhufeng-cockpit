
import React, { useState } from 'react';
import styled from 'styled-components';
import ScaleContainer from '../ScaleContainer';



const T4BlockWrap = styled.div<Record<string,any>>`
padding:14px;
width:600px;
height:400px;
/* background-color:#000; */
display:grid;
justify-items:center;
align-items:center;
grid-template-columns: repeat(2 , 1fr);
grid-template-rows: repeat(2 , 1fr);
`

const T4BlockItem = styled.div`
  width: 260px;
  height: 170px;
  background-color:#fff;
  border-radius:10px;
`
function T4Block() {
  const [disabled,setDisabled] = useState(false)
  return (
    <ScaleContainer width={600} height={400} disabled={disabled}>
    <T4BlockWrap>
      <T4BlockItem onClick={()=>setDisabled(flag=>!flag)}>目前状态:{disabled?'取消监听':'正在监听'}</T4BlockItem>
      <T4BlockItem>2</T4BlockItem>
      <T4BlockItem>3</T4BlockItem>
      <T4BlockItem>4</T4BlockItem>
    </T4BlockWrap>
    </ScaleContainer>
  );
}

export default T4Block;
