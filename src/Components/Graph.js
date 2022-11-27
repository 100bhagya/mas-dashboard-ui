import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Data from "../data/graphData";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";

const processCSV = (str, delim = ",") => {
  const headers = str.slice(0, str.indexOf("\n")).split(delim);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  const newArray = rows.map((row) => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {});
    return eachObject;
  });

  return newArray;
};
const Graph = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .get(`${API_BASE_URL}/api/getStudentReport1`, config)
      .then((res) => {
        const processedCSVArray = processCSV(res.data.toString());
        let dataArray = [];
        for (let i = 0; i < processedCSVArray.length && i < 20; i++) {
          dataArray.push({
            name: processedCSVArray[i]["Exam Name"],
            percentile: Math.random() * (100 - 70) + 70,
            date: processedCSVArray[i]["Exam Date"],
          });
        }
        setData(dataArray);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);
  return (
    <AreaChart
      width={940}
      height={370}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 40,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" angle={305} dy={20} dx={-15} interval={0} />
      <YAxis
        tickCount={24}
        interval={1}
        domain={[0, 100]}
        label={{ value: "Percentile", angle: -90, position: "insideLeft" }}
      />
      <Tooltip
        formatter={(value, name, props) => {
          return [`${value.toFixed(2)} (${props.payload?.name})`, "Percentile"];
        }}
      />
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
