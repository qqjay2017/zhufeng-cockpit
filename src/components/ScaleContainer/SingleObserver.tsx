import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ScaleContainerProps } from ".";
import { observer, unobserver } from "./observerUtil";
import { useObserve } from "./useObserve";

interface SingleObserverProps extends ScaleContainerProps {}

const WrapDomStyle = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;
const ScaleDomStyle = styled.div<{
  width: number;
  height: number;
  scale: number;
  left: number;
  top: number;
}>`
  position: absolute;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  left: ${(props) => props.left + "px"};
  top: ${(props) => props.top + "px"};
  transform: scale(${(props) => props.scale});

  transform-origin: top left;
 
`;
function SingleObserver(props: SingleObserverProps) {
  const { children, disabled } = props;
  console.log(props, "propspropsprops");
  // ref
  const wrapDomRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef<SingleObserverProps>(props);
  propsRef.current = props;

  // state

  const [scale, setScale] = useState(1);
  const [translateArr, setTranslateArr] = useState([0, 0]);

  const onInternalResize = useCallback((target: HTMLDivElement) => {
    // observe回调,纯函数  我们 target = WrapDomStyle
    const { width, height } = target.getBoundingClientRect();
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);
    //横向/纵向 需要缩放的比例
    // 443 / 600 = scale(xxx)

    const w = fixedWidth / props.width;
    const h = fixedHeight / props.height;

    const s = Math.min(w, h);
    setScale(s);

    const leftNum = (fixedWidth - props.width * h) / 2;
    const topNum = (fixedHeight - props.height * w) / 2;
    setTranslateArr([leftNum <= 0 ? 0 : leftNum, topNum <= 0 ? 0 : topNum]);
  }, []);

  useObserve({
    disabled,
    currenDom: wrapDomRef.current,
    onInternalResize
  })

  return (
    <WrapDomStyle ref={wrapDomRef}>
      <ScaleDomStyle
        width={props.width}
        height={props.height}
        scale={scale}
        left={translateArr[0] || 0}
        top={translateArr[1] || 0}
      >
        {children}
      </ScaleDomStyle>
    </WrapDomStyle>
  );
}

export default SingleObserver;
