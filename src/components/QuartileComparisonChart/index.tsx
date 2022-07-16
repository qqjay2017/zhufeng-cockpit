import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "(主)策略v1.0-(陪跑)策略v2.0",
   
    value: 1200,
    "q0.25": {
      leftValue: "120",
      rightValue: "156",
    },

    "q0.5": {
      leftValue: "523",
      rightValue: "421",
    },

    "q0.75": {
      leftValue: "899",
      rightValue: "862",
    },
  },
  {
    name: "(主)策略v1.2-(陪跑)策略v2.0",
    value: 1200,
    "q0.25": {
      leftValue: "156",
      rightValue: "156",
    },

    "q0.5": {
      leftValue: "300",
      rightValue: "421",
    },

    "q0.75": {
      leftValue: "756",
      rightValue: "862",
    },
  },
];

const getPath = (
  start: number,
  leftValue: number,
  rightValue: number,
  height: number,
  proportion: number
) => {
  const leftY = leftValue * proportion;
  const rightY = rightValue * proportion;
  return `M${start},${height - leftY} L${start + 20},${height - rightY}`;
};
const getText = (
  start: number,
  value: number,
  proportion: number,
  height: number,
  fill: string
) => {
  const Y = value * proportion;

  return (
    <text
      x={start}
      y={height - Y - 10}
      fontSize={10}
      textAnchor="middle"
      fill={fill}
    >
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      {
        payload.value.split('-').map((name:string,index:number)=>{
          return   <text key={name+index} x={index ===0 ? -40:40} y={0} dy={16}  textAnchor={'middle'}
           fontSize={10} fill="#666"  >
          {name}
        </text>
        })
      }
    
    </g>
  );
};

const QuartileComparisonChartWrap = styled.div`
  padding:20px 0;
  width:100%;
  height:100%;
`

const LineBar = (props: any) => {
  const { fill, x, y, width, height, value } = props;

  const start = x + (width / 2 - 10);
  const proportion = height / value;


  return (
    <g>
      <path
        d={`${getPath(
          start,
          props["q0.25"].leftValue,
          props["q0.25"].rightValue,
          height,
          proportion
        )}`}
        stroke={"#8884d8"}
      />
      <path
        d={`${getPath(
          start,
          props["q0.5"].leftValue,
          props["q0.5"].rightValue,
          height,
          proportion
        )}`}
        stroke={"#82ca9d"}
      />
      <path
        d={`${getPath(
          start,
          props["q0.75"].leftValue,
          props["q0.75"].rightValue,
          height,
          proportion
        )}`}
        stroke={"#FF8042"}
      />
      {getText(
        start - 5,
        props["q0.25"].leftValue,
        proportion,
        height,
        "#8884d8"
      )}
      {getText(
        start + 25,
        props["q0.25"].rightValue,
        proportion,
        height,
        "#8884d8"
      )}
      {getText(start - 5, props["q0.5"].leftValue, proportion, height, "#82ca9d")}
      {getText(
        start + 25,
        props["q0.5"].rightValue,
        proportion,
        height,
        "#82ca9d"
      )}
      {getText(start - 5, props["q0.75"].leftValue, proportion, height, "#FF8042")}
      {getText(
        start + 25,
        props["q0.75"].rightValue,
        proportion,
        height,
        "#FF8042"
      )}
    </g>
  );
};

const LegendWrap =styled.div`
  display:flex;
  height:20px;
  width:100%;
  align-items:center;
  justify-content:center;
`
const LegendItemWrap = styled.div`
  display:flex;
  height:20px;
  margin-right:16px;
  
  
`

const LegendItemBlock = styled.div<{fill:string}>`
width:14px;
height:14px;
margin-right:8px;
background-color:${props=>props.fill};
`
const LegendItemTitle = styled.div`
  font-size:12px;
`

const LegendItem = (props:{fill:string;title:string;})=>{
  return <LegendItemWrap>
<LegendItemBlock fill={props.fill}></LegendItemBlock>
<LegendItemTitle>{props.title}</LegendItemTitle>
  </LegendItemWrap>

}
const CustomizedLegend = (props:any)=>{
  
  return <LegendWrap>
    <LegendItem fill="#8884d8" title="q0.25"></LegendItem>
    <LegendItem fill="#82ca9d" title="q0.5"></LegendItem>
    <LegendItem fill="#FF8042" title="q0.75"></LegendItem>
  </LegendWrap>

}
function QuartileComparisonChart() {
  return (
    <QuartileComparisonChartWrap>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0,
          }} >
        <XAxis tickLine={false} dataKey="name" tick={<CustomizedAxisTick />} />
        <CartesianGrid opacity={0.2} vertical={false} strokeDasharray="3 3"  />
        <YAxis  tickLine={false}   tick={{stroke: '#8884d8', strokeWidth: 0.5,fontSize:10}} />
        <Legend content={<CustomizedLegend  />}  />
        <Bar dataKey="value" fill="#8884d8" shape={<LineBar />} />
      </BarChart>
    </ResponsiveContainer>
    </QuartileComparisonChartWrap>
  );
}

export default QuartileComparisonChart;
