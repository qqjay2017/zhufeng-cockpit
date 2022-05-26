import GridArea from "@/components/common/grid-area";
import Xpanel, { Xpanel1 } from "@/components/common/xpanel";
import FlopNum from "@/components/FlopNum";
import React, { useEffect, useState } from "react";

function FlopNumBlock() {
  const [value,setValue] = useState('12345678901')

  useEffect(()=>{
    setInterval(()=>{
      const random1 = (Math.random()*99999).toFixed(0)
      const random2 = (Math.random()*99999).toFixed(0)
      const random = random1+random2
      console.log(random)
      setValue(random)
    },4000)
  },[])
  return (
    <GridArea area="flopnum">
      <Xpanel1>
        <div className="flex-center w-100 h-100">
          <FlopNum  value={value} />
        </div>
      </Xpanel1>
    </GridArea>
  );
}

export default FlopNumBlock;
