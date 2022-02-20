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
//משתנה גלובלי לשמות ימות השבוע
const daysNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

export default function SalesChart(props) {
//שימוש בספרייה חיצונית להצגת המידע כגרף  
  let {dates} = props

  const calcOrders = (day) => {
    //שמירת התאריך של היום פחות היום המבוקש
    let orderDate = new Date();
    orderDate.setDate(orderDate.getDate() - day);
    //פילטור הזמנות לפי התאריך המבוקש כלמר שנה חודש ויום מבוקש
    let orders = dates.filter(date =>
      new Date(date.date).getMonth() === orderDate.getMonth() && new Date(date.date).getDate() === orderDate.getDate() &&
      new Date(date.date).getFullYear() === orderDate.getFullYear())
    //החזרת הסכימה של מחירי ההזמנות ליום הנוכחי מכל המשתמשים
    return orders.reduce((prev, current) => { return prev + current.totalPrice }, 0)
  }
  //גייסון לדאטה של הגרף מתחלק לפי הזמנות השבוע האחרון
  //מתבצע חישוב מודולרי לקבלת ימי השבוע מהיום אחורה
  //שמירת מחיר כולל של כל הזמנות ביום הרצוי על ידי קריאה לפונקצייה
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
        width={610}
        height={450}
        data={data} // מקבל את גייסון ההזמנות לפי ימים
        margin={{
          top: 10,
          right: 0,
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
