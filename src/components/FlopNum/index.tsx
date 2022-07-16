import React, { useMemo } from "react";
import styled from "styled-components";

interface FlopNumProps {
  value: string | number | undefined;
}
const lineHeight = 30;
const allNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const NumberItem = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  font-size: 14px;
  color: #fff;
  padding: 0 4px;
`;
const NumberItemWrap = styled.div<{ translateY: number }>`
  transform: translateY(${(props) => props.translateY + "px"});
  transition: transform 1s;
`;

function FlopNumItem({
  value,
  lineHeight,
}: {
  value: string;
  lineHeight: number;
}) {
  const translateYmemo = useMemo(() => {
    const index = allNum.findIndex((v) => v === value);
    if (index < 0) {
      // 没找到,传进来一个不认识的
      return lineHeight;
    } else {
      // 找到了
      return -1 * (index * lineHeight);
    }
  }, [value, lineHeight]);
  return (
    <NumberItemWrap translateY={translateYmemo}>
      {allNum.map((num) => (
        <NumberItem key={num} height={lineHeight + "px"}>
          {num}
        </NumberItem>
      ))}
    </NumberItemWrap>
  );
}

const FlopNumContainer = styled.div<{ height: string }>`
  display: flex;
  width: 100%;
  height: ${(props) => props.height};
  overflow: hidden;

  justify-content: center;
`;
const FlopNumWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function FlopNum({ value }: FlopNumProps) {
  const valueArr = useMemo(() => {
    if (!value) {
      return ["0"];
    }
    return String(value).split("");
  }, [value]);
  return (
    <FlopNumWrap>
      <FlopNumContainer height={lineHeight + "px"}>
        {valueArr.map((val, index) => {
          return (
            <FlopNumItem
              key={index}
              value={val}
              lineHeight={lineHeight}
            ></FlopNumItem>
          );
        })}
      </FlopNumContainer>
    </FlopNumWrap>
  );
}

export default FlopNum;
