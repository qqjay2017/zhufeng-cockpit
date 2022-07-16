import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ResponsiveContainerProps } from ".";

import {  observe, unobserve } from "./observerUtil";
interface SingleObserverProps extends ResponsiveContainerProps {
  children: React.ReactElement;
}

const WrapDomStyle = styled.div`
width:100%;
height:100%;
position:relative;
`
const InnerDomStyle = styled.div<{width:number;height:number;scale:number;left:string;top:string;}>`
  width:${props=>props.width+'px'};
  height:${props=>props.height+'px'};
  transform:scale(${props=>props.scale});
  position:absolute;
  left: ${props=>props.left};
  top: ${props=>props.top};
  // 缩放中心点
  transform-origin: top left;
`  

export function SingleObserver(props: SingleObserverProps) {
  const { children, disabled } = props;

  const wrapperRef = React.useRef<HTMLDivElement|null>(null);

  // ============================= Size =============================

  const sizeRef = React.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({
    top: '0',
    left: '0',
  });

  // =========================== Observe ============================
  const propsRef = useRef<ResponsiveContainerProps>(props);
  propsRef.current = props;
  // Handler

  const onInternalResize = useCallback((target: HTMLDivElement|null) => {
    if(!target){
      return false
    }
    
    const { onResize } = propsRef.current;
    // 小数
    const { width, height } = target.getBoundingClientRect();
    // 整数
    const { offsetWidth, offsetHeight } = target;

    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);
 
    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      const size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight,
      };
      
      sizeRef.current = size;

      const mergedOffsetWidth =
        offsetWidth === Math.round(width) ? width : offsetWidth;
      const mergedOffsetHeight =
        offsetWidth === Math.round(height) ? height : offsetHeight;
      const sizeInfo = {
        ...size,
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight,
      };
      const w = fixedWidth / props.width;
      const h = fixedHeight / props.height;
      const isLong = !!(w < h);
      let s = isLong ? w : h; // 比例
      setScale(s);
      const leftNum = (fixedWidth - props.width * h) / 2;
      const topNum = (fixedHeight - props.height * w) / 2;
      setPosition({
        left : leftNum <= 0 ? '0': leftNum+'px',
        top: topNum <= 0 ? '0': topNum+'px',
      })
      if (onResize) {
        // 延迟回调,但是在下一帧之前
        Promise.resolve().then(() => {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe

  useEffect(()=>{
    const currentElement =  wrapperRef.current

    if(currentElement&& !disabled){
      observe(currentElement, onInternalResize);

    }
    return () => {
      unobserve(currentElement, onInternalResize);
    }

  },[wrapperRef.current,disabled])

// WrapDomStyle和父容器一样大
  return <WrapDomStyle ref={wrapperRef}>
    <InnerDomStyle width={props.width} height={props.height} scale={scale} left={position.left} top={position.top}>
   {children}
    </InnerDomStyle>
   
  </WrapDomStyle>;
}
