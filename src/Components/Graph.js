import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Data from "../data/graphData";

const Graph = () => {
  return (
    <AreaChart
      width={1000}
      height={370}
      data={Data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 40,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={305} dy={20} dx={-15} interval={0} />
      <YAxis
        tickCount={24}
        interval={1}
        domain={[0, 100]}
        label={{ value: "Percentile", angle: -90, position: "insideLeft" }}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="percentile"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
};

export default Graph;
