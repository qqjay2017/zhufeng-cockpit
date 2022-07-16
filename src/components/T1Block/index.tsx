import api from "@/common/api";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
const itemHeight = 50;
const duration = 300;
const RollCardItemStyle = styled.div<{ height: number }>`
  padding-top: ${(props) => props.height/2 + "px"};

  overflow: hidden;
`;
const RollCardItemWrap = styled.div<{ height: number; totalHeight: number }>`
  height: ${(props) => props.totalHeight + "px"};

  position: relative;
`;
const RollCardItem = styled.div<{ height: number; index: number }>`
  height: ${(props) => props.height + "px"};
  line-height: ${(props) => props.height + "px"};
  font-size: 20px;
  transform: translate3d(0, 0, 0);
  position: absolute;
  left: 0;
  top: ${(props) => props.index * itemHeight + "px"};
  width: 100%;
`;
function T1Block() {
  const [productList, setProduct] = useState<productModel.Datum[]>([]);
  const retryCountRef = useRef(3);
  const pageInfoRef = useRef({
    pageSize: 10,
    current: 1,
    total: 0,
  });
  const currentTranslateRef = useRef(0);
  const [currentTranslateState, setCurrentTranslateState] = useState(0);
  const [pageInfoRefCurrent, setPageInfoRefCurrent] = useState(1);

  const startGsap = () => {
    gsap.fromTo(
      ".RollCardItem",
      {
        duration: duration / 500,
        delay: duration / 1000,
        opacity:(_, target) => {
       
              if(target.style.opacity==0 ){
                return 0
              }
          const index = Number(target.tabIndex);
          
          if(currentTranslateRef.current>index){
            return 0
          }
      

          return 1
          
        },
        // translateY: -currentTranslateRef.current * itemHeight + "px",
        top: (_, target) => {
          const index = Number(target.tabIndex);
          const rpx =
            -currentTranslateRef.current * itemHeight +
            index * itemHeight +
            "px";
          console.log(index, rpx, "index");
          return rpx;
        },
      },
      {
        duration: duration / 500,
        delay: duration / 1000,
        // translateY: -(currentTranslateRef.current + 1) * itemHeight + "px",
        top: (_, target) => {
          const index = Number(target.tabIndex);
          const rpx =
            -(currentTranslateRef.current + 1) * itemHeight +
            index * itemHeight +
            "px";
          console.log(index, rpx, "to index");

          return rpx;

         
        },
        opacity:(_, target) => {

          const index = Number(target.tabIndex);
          if(currentTranslateRef.current===index){
            return 0
          }else {
            return 1
          }
          
        },
        onComplete: () => {
          //
          if (
            currentTranslateRef.current ===
            pageInfoRef.current.total - pageInfoRef.current.pageSize - 1
          ) {
            setProduct((pro) =>
              pro.concat(
                pro.map((p) => ({
                  ...p,
                  id: p.id + Math.random(),
                }))
              )
            );
          }
          if (currentTranslateRef.current >= pageInfoRef.current.total - 1) {
            //到头了,重新请求第一页
            pageInfoRef.current.current = 1;
            currentTranslateRef.current = 0;

            // 把定位归0下
            gsap.to(".RollCardItem", {
              duration: 0,
              translateY: +"0px",
            });

            init(1);
          } else if (
            currentTranslateRef.current >
              pageInfoRef.current.pageSize * (pageInfoRef.current.current - 1) -
                5 &&
            (pageInfoRef.current.current + 1) * pageInfoRef.current.pageSize <=
              pageInfoRef.current.total
          ) {
            // 滚一半,中途静默请求
            // debugger

            init(pageInfoRef.current.current + 1);
            currentTranslateRef.current = currentTranslateRef.current + 1;

            requestAnimationFrame(() => {
              setTimeout(() => {
                startGsap();
              }, duration);
            });
          } else {
            // 政策情况
            currentTranslateRef.current = currentTranslateRef.current + 1;

            requestAnimationFrame(() => {
              setTimeout(() => {
                startGsap();
              }, duration);
            });
          }
          // 执行完,无论何种情况,同步下虚拟列表情况
          setCurrentTranslateState(currentTranslateRef.current);
        },
      }
    );
  };
  const getProductList = (current?: number) => {
    const c = current || pageInfoRef.current.current;
    // 一次性请求两页,可能到头了
    if (
      c !== 1 &&
      c * pageInfoRef.current.pageSize > pageInfoRef.current.total
    ) {
      // debugger
      return Promise.reject({});
    }
    return new Promise((resolve, reject) => {
      api
        .invoke<productModel.RootObject>("get", "/v1/products/list", {
          pageSize: pageInfoRef.current.pageSize,

          current: c,
        })
        .then(
          (res) => {
            pageInfoRef.current.current = res.current;
            pageInfoRef.current.total = res.total;
            retryCountRef.current = 3;
            if (res.current === 1) {
              setProduct(res.data);
            } else {
              setProduct((pro) => pro.concat(res.data));
            }

            resolve({});
          },
          () => {
            if (retryCountRef.current) {
              // 接口报错了,从头开始
              retryCountRef.current--;
              currentTranslateRef.current = 0;
              pageInfoRef.current = {
                pageSize: 10,
                current: 1,
                total: 0,
              };
              setTimeout(() => {
                init(1);
              }, 1000);
            }
          }
        );
    });
  };
  const init = (start: number) => {
    getProductList(start).then(() => {
      getProductList(start + 1);
      if (pageInfoRef.current.current === 1) {
        setTimeout(() => {
          startGsap();
        }, duration);
      }
    });
  };
  useEffect(() => {
    init(1);
  }, []);
  return (
    <RollCardItemStyle height={itemHeight}>
      <RollCardItemWrap
        className="RollCardItemWrap"
        totalHeight={itemHeight * (pageInfoRef.current.pageSize - 2)}
        height={itemHeight}
      >
        {(productList || []).map((p, index) => {
          const start = currentTranslateState - 2;
          const end = currentTranslateState + pageInfoRef.current.pageSize + 2;

          if (index > end || index < start) {
            return null;
          }
          return (
            <RollCardItem
              className={"RollCardItem RollCardItem" + index}
              key={p.id + p.name}
              tabIndex={index}
              index={index}
              height={itemHeight}
            >
              s{start} e{end} i{index} {p.name}
            </RollCardItem>
          );
        })}
      </RollCardItemWrap>
    </RollCardItemStyle>
  );
}

export default T1Block;
