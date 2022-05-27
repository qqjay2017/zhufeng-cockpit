import GridArea from "@/components/common/grid-area";
import Xpanel, { Xpanel1 } from "@/components/common/xpanel";
import FlopNum from "@/components/FlopNum";
import React, { useEffect, useState } from "react";

function FlopNumBlock() {
  const [value,setValue] = useState('12345678901')

  const setRandomValue = ()=>{
    setValue(v=>{
      const vArr = v.split('')

     const newVArr= vArr.map((v,index)=>{
       
        const addRes = String(Number(v)+index+1)
        return addRes[0]

      })
      console.log(newVArr,'newVArr')
      return newVArr.join('')
    })
  }
  return (
    <GridArea area="flopnum">
      <Xpanel1>
        <div className="flex-center w-100 h-100">
          当前值:{value}
          <button onClick={()=>setRandomValue()}>新增对应位置下标的值</button>
          <FlopNum  value={value} timeout={2000} />
        </div>
      </Xpanel1>
    </GridArea>
  );
}

export default FlopNumBlock;
