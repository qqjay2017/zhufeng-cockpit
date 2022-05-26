import React from "react";
import styled from "styled-components";

const Xpanel = styled.div`
  padding: 15px;
  height: 100%;
  min-height: 170px;
  background: url(${require("@/assets/img/common/panel.png")}) center no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  position:relative;
`;

export const Xpanel1 = styled.div`
  padding: 15px;
  height: 100%;
  min-height: 50px;
 
  
  box-sizing: border-box;
  position:relative;
  border:1px solid #5dc2fe33;
  ::before {
    content: "";
    position:absolute;
    width:12px;
    height:12px;
    left:0;
    top:0;
    border-top:1px solid var(--color-light-text);
    border-left:1px solid var(--color-light-text);
  }
  ::after {
    content: "";
    position:absolute;
    width:12px;
    height:12px;
    right:0;
    bottom:0;
    border-right:1px solid var(--color-light-text);
    border-bottom:1px solid var(--color-light-text);
  }

`;




export default Xpanel;
