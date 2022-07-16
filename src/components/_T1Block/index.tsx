import { ResponsiveContainer } from '../ResponsiveContainer';
import React, { useState } from 'react';
import styled from 'styled-components';



const T1BlockWrap = styled.div<Record<string,any>>`
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

const T1BlockItem = styled.div`
  width: 260px;
  height: 170px;
  background-color:#fff;
  border-radius:10px;
`
function T1Block() {
  const [disabled,setDisabled] = useState(false)
  return (
    <ResponsiveContainer width={600} height={400} disabled={disabled}>
    <T1BlockWrap>
      <T1BlockItem onClick={()=>setDisabled(flag=>!flag)}>目前状态:{disabled?'取消监听':'正在监听'}</T1BlockItem>
      <T1BlockItem>2</T1BlockItem>
      <T1BlockItem>3</T1BlockItem>
      <T1BlockItem>4</T1BlockItem>
    </T1BlockWrap>
    </ResponsiveContainer>
  );
}

export default T1Block;
