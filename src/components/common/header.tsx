import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: var(--space-header);
  max-width: 1920px;
  background: url(${require('@/assets/img/common/header.png')}) center no-repeat;
`;

const HeaderText = styled.div`
    margin:0;
	padding:0;
	line-height:50px;
	text-align:center;
	font-size:24px;
	color:var(--color-light-text);
`

function Header({title}:{title:string}) {
  return <HeaderStyle>
      <HeaderText>{title}</HeaderText>
  </HeaderStyle>;
}

export default Header;
