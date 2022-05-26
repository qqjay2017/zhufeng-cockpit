import React, { PropsWithChildren, useEffect } from "react";
import 'particles.js'
import styled from "styled-components";
import { cssVar } from "@/styles/variables";
console.log(cssVar)

const BgStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: rgb(8, 14, 19);
  /* background-image: radial-gradient(
    circle,
    #111c25,
    #0c131a,
    #0b1117,
    
    
    #080e13,
    #070c11,
    #060b0f,
    #05090c,
    #030608
  ); */
  background-image:url(${require('@/assets/img/common/bg01.png')});
  background-repeat:no-repeat;
  background-size:100% 100%;


  @media (max-width: 600px) {
    width: 100%;
  height: unset;
  }
`;

const ParticlesWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ChildrenWrap = styled.div`

    width:100%;
    height:100%;
    position:relative;
    z-index:2;
    color:var(--color-light-text);
`

function CommonBg({ children }: PropsWithChildren<{}>) {
    useEffect(()=>{
        
        particlesJS.load('particles-container','/particles.json',()=>{
            console.log('particlesConfig load')
        })
    },[])
  return (
    <BgStyle className="w-100 h-100">
      <ParticlesWrap  id="particles-container">
       
      </ParticlesWrap>
      <ChildrenWrap>{children}</ChildrenWrap>
    </BgStyle>
  );
}

export default CommonBg;
