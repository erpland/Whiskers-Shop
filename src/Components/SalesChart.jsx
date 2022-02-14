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




export default function SalesChart(props) {
  let { orders, dates } = props
  
 

  const calcOrders = (day) => {
    let d = new Date();
    d.setDate(d.getDate() - day);

    let orders = dates.filter(date =>
      new Date(date.date).getMonth() === d.getMonth() && new Date(date.date).getDate() === d.getDate() &&
      new Date(date.date).getFullYear() === d.getFullYear())
    return orders.reduce((prev, current) => { return prev + current.totalPrice }, 0)
  }
  const data = [
    {
      name: daysNames[(d.getDay() + 1) % 7],
      sales: calcOrders(6),
    },
    {
      name: daysNames[(d.getDay() + 2) % 7],
      sales: calcOrders(5),
    },
    {
      name: daysNames[(d.getDay() + 3) % 7],
      sales: calcOrders(4),
    },
    {
      name: daysNames[(d.getDay() + 4) % 7],
      sales: calcOrders(3),
    },
    {
      name: daysNames[(d.getDay() + 5) % 7],
      sales: calcOrders(2),
    },
    {
      name: daysNames[(d.getDay() + 6) % 7],
      sales: calcOrders(1),
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
