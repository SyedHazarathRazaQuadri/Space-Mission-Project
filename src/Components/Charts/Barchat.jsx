import React from "react";
import './Charts.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    RocketLab: 4000,
    SpaceX: 2400,
    ISRO: 2400
  },
  {
    name: "Page B",
    RocketLab: 3000,
    SpaceX: 1398,
    ISRO: 2210
  },
  {
    name: "Page C",
    RocketLab: 2000,
    SpaceX: 9800,
    ISRO: 2290
  },
  {
    name: "Page D",
    RocketLab: 2780,
    SpaceX: 3908,
    ISRO: 2000
  },
  {
    name: "Page E",
    RocketLab: 1890,
    SpaceX: 4800,
    ISRO: 2181
  },
  {
    name: "Page F",
    RocketLab: 2390,
    SpaceX: 3800,
    ISRO: 2500
  },
  {
    name: "Page G",
    RocketLab: 3490,
    SpaceX: 4300,
    ISRO: 2100
  }
];

const BarChat = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="SpaceX" stackId="a" fill="#8884d8" />
      <Bar dataKey="ISRO" stackId="a" fill="#82ca9d" />
      <Bar dataKey="RocketLab" fill="#ffc658" />
    </BarChart>
  );
};

export default BarChat;
