import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import moment from "moment";

const Graph = ({ testData }) => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const themeMode = useSelector((state) => state.theme.themeMode);
  useEffect(() => {
    const data = [];
    for (let i = 0; i < testData.length; i++) {
      data.push({
        testName: testData[i].testName,
        percentile: testData[i].percentile,
        testDate: testData[i].testDate.substr(0, 10),
      });
    }
    // console.log(data);
    setData(data);
  }, [testData]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   const config = {
  //     headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
  //   };
  //   axios
  //     .get(`${API_BASE_URL}/api/getStudentReport`, config)
  //     .then((res) => {
  //       let dataA``rray = [];
  //       for (let i = 0; i < res.data.length && i < 20; i++) {
  //         dataArray.push({
  //           examDate: res.data[i][0],
  //           examName: res.data[i][1],
  //           percentile: Math.random() * (100 - 70) + 70,
  //         });
  //       }
  //       setData(dataArray);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [user]);
  return (
    
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tick={{ fill: `${themeMode ? "white" : "black"}`, fontSize: 15 }}
          dataKey="testDate"
          angle={305}
          dy={20}
          dx={-15}
          interval={0}
        />
        <YAxis
          tick={{ fill: `${themeMode ? "white" : "black"}` }}
          tickCount={24}
          interval={1}
          domain={[0, 100]}
          fontStyle={{ color: "white" }}
          label={{
            value: "Percentile",
            angle: -90,
            position: "insideLeft",
            fill: `${themeMode ? "white" : "black"}`,
          }}
        />
        <Tooltip
          formatter={(value, name, props) => {
            return [
              `${value.toFixed(2)} (${props.payload?.testName})`,
              "Percentile",
            ];
          }}
        />
        <Area
          type="monotone"
          dataKey="percentile"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
