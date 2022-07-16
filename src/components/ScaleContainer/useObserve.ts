import { useEffect } from "react";
import { observer, ResizeListener, unobserver } from "./observerUtil";

export function useObserve({
    currenDom,
    disabled,
    onInternalResize
}:{
    currenDom:HTMLDivElement|null;
    disabled?:boolean;
    onInternalResize:ResizeListener

}){
    // TODO

    useEffect(() => {
        // const currenDom = wrapDomRef.current;
        if (currenDom && !disabled) {
          // 监听
          observer(currenDom, onInternalResize);
        }
        return () => {
          // 取消监听
          unobserver(currenDom, onInternalResize);
        };
      }, [disabled, currenDom]);
}