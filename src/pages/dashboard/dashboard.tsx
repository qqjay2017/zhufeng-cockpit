import { CommonBg } from '@/components/common';
import ContentBase from '@/components/common/content-base';
import Header from '@/components/common/header';
import React from 'react';
import FlopNumBlock from './components/FlopNumBlock';
import DashboardGrid from './components/grid';
import T1Block from './components/T1Block';
import T2Block from './components/T2Block';
import T3Block from './components/T3Block';
import T4Block from './components/T4Block';

function Dashboard() {
  return (
    <CommonBg>
      <Header title='珠峰驾驶舱' />
      <DashboardGrid >
        <FlopNumBlock />
        <T1Block />
        <T2Block />
        <T3Block />
        <T4Block />
      </DashboardGrid>
    </CommonBg>
  );
}

export default Dashboard;
