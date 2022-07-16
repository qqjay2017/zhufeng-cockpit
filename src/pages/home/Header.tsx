import React from 'react';
import styled from 'styled-components';
const HeaderStyle = styled.div`
    width:100%;
    height: 100%;
    position:relative;
`
const HeaderImg = styled.img`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:1;
`

const HeaderText = styled.div`
    position:relative;
    line-height:50px;
    height:50px;
    font-size:22px;
    
    left:0;
    width:100%;
    text-align:center;
    z-index:2;
    color:#fff;
    font-weight:600;
`
function Header() {
  return (
    <HeaderStyle>
        <HeaderText >可视化</HeaderText>
      <HeaderImg src={require('@/assets/img/common/header.png')} />
    </HeaderStyle>
  );
}

export default Header;
