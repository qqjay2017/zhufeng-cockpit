import React from 'react';
import SingleObserver from './SingleObserver';

interface SizeInfo {
  
}

export type OnResize = (sizeInfo:SizeInfo)=>void

export interface ScaleContainerProps {
  width:number;
  height:number;
  children:React.ReactElement
  disabled?:boolean;
  maxScale?:number;
  minScale?:number;
  onResize?:OnResize
  
}

function ScaleContainer(props:ScaleContainerProps) {
  const {children} = props
  return (
    <SingleObserver {...props} >
      {children}
    </SingleObserver>
  );
}

export default ScaleContainer;
