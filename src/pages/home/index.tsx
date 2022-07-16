import FlopNum from "@/components/FlopNum";
import QuartileComparisonChart from "@/components/QuartileComparisonChart";

import T1Block from "@/components/T1Block";
import T4Block from "@/components/T4Block";
// import { ResponsiveContainer } from "@core/rc-components";
import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  position: relative;
`;
const HomeWrapImg = styled.img`
  width: 100%;
  height: 100%;
  font-size: 16px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const ImgTop = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const PageHeader = styled.div`
  width: 100%;
  height: 80px;
`;
const PageContent = styled.div`
  width: 100%;
  height: calc(100% - 80px);

  display: grid;

  grid-template-areas:
    "number number number"
    "t1 t2 t3"
    "t4 t4 t5";

  grid-template-columns: 300fr 400fr 300fr;
  grid-template-rows: 50px 1fr 1fr;
  grid-gap: 24px;
  padding: 20px;
`;

const AreaBase = styled.div<{ areaName: string }>`
  grid-area: ${({ areaName }) => areaName};
  border: 1px solid hotpink;
  // 记得加这个,不然内容会把格子撑开
  overflow: hidden;
`;

const Loading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  z-index: 100;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    if (!imgs) {
      setLoading(false);
      return;
    }
    let imgLength = imgs.length;
    [].forEach.call(imgs, (img: HTMLImageElement) => {
      img.addEventListener("load", (e) => {
        imgLength = imgLength - 1;
        if (imgLength === 0) {
          setLoading(false);
        }
      });
    });
  }, []);
  const [flopNum, setFlopNum] = useState(646456545515);
  const changeFlopNum = () => {
    setFlopNum(
      new Date().getMilliseconds() + parseInt(Math.random() * 99999 + "")
    );
  };
  return (
    <HomeWrap>
      {loading && <Loading>加载中...</Loading>}

      <HomeWrapImg src={require("@/assets/img/common/bg01.png")} alt="" />
      <ImgTop>
        <PageHeader>
          <Header />
        </PageHeader>
        <PageContent>
          <AreaBase areaName="number">
            <FlopNum value={flopNum} />
          </AreaBase>
          <AreaBase areaName="t1">
           <T1Block /> 
          </AreaBase>
          <AreaBase areaName="t2">
            <QuartileComparisonChart />
          </AreaBase>
          <AreaBase areaName="t3">
           
            <h2>{flopNum}</h2>
            <button onClick={changeFlopNum}>changeFlopNum</button>
          </AreaBase>
          <AreaBase areaName="t4"><T4Block /></AreaBase>
          <AreaBase areaName="t5">t5</AreaBase>
        </PageContent>
      </ImgTop>
    </HomeWrap>
  );
}

export default Home;
