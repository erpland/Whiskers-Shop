import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

var d = new Date();
const daysNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
console.log(daysNames[d.getDay()]);



export default function SalesChart(props) {
  let { orders, dates } = props
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  const calcOrders = (day) => {
    console.log(new Date (dates[4].date).getMonth() === mm)
    // dates.filter((date,index)=> date.)
  }
  const data = [
    {
      name: daysNames[(d.getDay() + 1) % 7],
      sales: 1,
    },
    {
      name: daysNames[(d.getDay() + 2) % 7],
      sales: 2,
    },
    {
      name: daysNames[(d.getDay() + 3) % 7],
      sales: 3,
    },
    {
      name: daysNames[(d.getDay() + 4) % 7],
      sales: 4,
    },
    {
      name: daysNames[(d.getDay() + 5) % 7],
      sales: 5,
    },
    {
      name: daysNames[(d.getDay() + 6) % 7],
      sales: 1,
    },
    {
      name: "Today",
      sales: calcOrders(0),
    }
  ];
  return (
    <div>
      <AreaChart
        width={600}
        height={450}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
