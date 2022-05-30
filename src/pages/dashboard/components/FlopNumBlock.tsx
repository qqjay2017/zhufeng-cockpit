import GridArea from "@/components/common/grid-area";
import Xpanel, { Xpanel1 } from "@/components/common/xpanel";
import FlopNum from "@/components/FlopNum";
import React, { useEffect, useState } from "react";

function FlopNumBlock() {
  const [value,setValue] = useState('1234567890')
  const [timeout,setTimeout] = useState(2000)

  const setRandomValue = ()=>{
    setValue(v=>{
      const vArr = v.split('')

     const newVArr= vArr.map((v,index)=>{
       
        const addRes = String(Number(v)+index+1)
        return addRes[0]

      })
     
      return newVArr.join('')
    })
  }
  const setT = (v:string)=>{
    if(String(Number(v))==='NaN'){
      return
    }
    setTimeout(Number(v))
  }

  useEffect(()=>{
    setInterval(setRandomValue,5000)
  },[])
  return (
    <GridArea area="flopnum">
      <Xpanel1>
        <div className="flex-center w-100 h-100">
        
        
          <FlopNum  value={value} timeout={timeout} />
        </div>
      </Xpanel1>
    </GridArea>
  );
}

export default FlopNumBlock;
