import GridArea from '@/components/common/grid-area';
import Xpanel from '@/components/common/xpanel';
import React from 'react';

import {wtf} from '@core/micro-dev-sdk'


function T3Block() {
  console.log(wtf())
  return (
    <GridArea area='t3'>
      <Xpanel>T3Block</Xpanel>
    </GridArea>
   
  );
}

export default T3Block;
