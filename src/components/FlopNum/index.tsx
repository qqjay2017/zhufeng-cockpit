import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
interface FlopNumProps {
  value: string | number;
}

const FlopNumWrapOverflow = styled.div`
  overflow:hidden;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const FlopNumItemWrap = styled.div<{ translateY: number }>`
  transform: translate(0, ${(p) => p.translateY}px);
  transition: transform 3000ms;
  
`;
const FlopNumItemNum = styled.div<{ height: string }>`
  padding: 8px 10px;
  font-size: 14px;
  height: ${(p) => p.height || "30px"};
  line-height: 14px;
  text-align: center;
`;

const FlopNumWrap = styled.div`
  display: flex;
  position:relative;
  
`;

function FlopNumItem({ value }: { value: string }) {
  const blockHeight = 30;
  const allNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const midIndex = Math.ceil(allNum.length / 2) - 1;
 

  const translateYMemo = useMemo(() => {
    const isInclude = allNum.includes(value);
    if (!isInclude) {
      return blockHeight / 2;
    }
    let curIndex = allNum.findIndex((v) => v === value);
    return (midIndex - curIndex) * blockHeight + blockHeight / 2;
  }, [value, allNum]);


  return (

      <FlopNumItemWrap translateY={translateYMemo}>
        {allNum.map((num) => {
          return (
            <FlopNumItemNum key={num} height={blockHeight + "px"}>
              {num}
            </FlopNumItemNum>
          );
        })}
      </FlopNumItemWrap>

  );
}

function FlopNum({ value }: FlopNumProps) {
  const valueArrMemo = useMemo(() => {
    if (!value) {
      return ["0"];
    }
    return String(value).split("");
  }, [value]);
  return (
    <FlopNumWrapOverflow>
    <FlopNumWrap>
      {valueArrMemo.map((v, index) => {
        return <FlopNumItem key={index} value={v}></FlopNumItem>;
      })}
    </FlopNumWrap>
    </FlopNumWrapOverflow>
  );
}

export default FlopNum;