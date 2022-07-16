import React, { FC, useRef } from "react";

import { SingleObserver } from "./SingleObserver";

const INTERNAL_PREFIX_KEY = "rc-observer-key";
export interface SizeInfo {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
}

export type OnResize = (size: SizeInfo, element: HTMLDivElement) => void;
export interface ResponsiveContainerProps {
  children: React.ReactElement;
  disabled?: boolean;
  width: number;
  height: number;
  onResize?: OnResize;
}
export const ResponsiveContainer: FC<ResponsiveContainerProps> = (props) => {
  const { children } = props;



  return <SingleObserver {...props} key={INTERNAL_PREFIX_KEY}>
    {children}
  </SingleObserver>;
};
