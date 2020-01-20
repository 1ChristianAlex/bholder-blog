import React, { FC, createRef, useEffect, useState } from "react";
import { CardItem } from "components";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";

const LineChartGraph: FC = () => {
  const cardRef = createRef<HTMLDivElement>();
  const [cardWidht, setCardWidth] = useState(0);
  useEffect(() => {
    if (cardRef?.current) {
      setCardWidth(cardRef.current.offsetWidth - 40);
    }
  }, [cardRef]);
  const data = [
    {
      name: "January",
      ["Post Access"]: 4000,
      ["Pages Access"]: 2400,
      amt: 2400
    },
    {
      name: "February",
      ["Post Access"]: 3000,
      ["Pages Access"]: 1398,
      amt: 2210
    },
    {
      name: "March",
      ["Post Access"]: 2000,
      ["Pages Access"]: 9800,
      amt: 2290
    },
    {
      name: "April",
      ["Post Access"]: 2780,
      ["Pages Access"]: 3908,
      amt: 2000
    },
    {
      name: "May",
      ["Post Access"]: 1890,
      ["Pages Access"]: 4800,
      amt: 2181
    },
    {
      name: "June",
      ["Post Access"]: 2390,
      ["Pages Access"]: 3800,
      amt: 2500
    },
    {
      name: "July",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    },
    {
      name: "August",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    },
    {
      name: "September",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    },
    {
      name: "October",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    },
    {
      name: "November",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    },
    {
      name: "December",
      ["Post Access"]: 3490,
      ["Pages Access"]: 4300,
      amt: 2100
    }
  ];
  return (
    <CardItem title="Last Users Access" ref={cardRef}>
      <LineChart
        width={cardWidht || 720}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Pages Access" stroke="#8884d8" />
        <Line type="monotone" dataKey="Post Access" stroke="#82ca9d" />
      </LineChart>
    </CardItem>
  );
};

export default LineChartGraph;
