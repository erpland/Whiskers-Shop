// import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function TasteChart(props) {
  let item = props.item
  const data = [
    {
      subject: "Sweet",
      A: item.sweet,
    },
    {
      subject: "Floral",
      A: item.floral,
    },
    {
      subject: "Fruit",
      A: item.fruit,
    },
    {
      subject: "Body",
      A: item.body,
    },
    {
      subject: "Richness",
      A: item.richness,
    },
    {
      subject: "Smoke",
      A: item.smoke,
    },
    {
      subject: "Wine",
      A: item.wine,
    }
  ];
  return (
    <RadarChart
      cx={'50%'}
      cy={'50%'}
      outerRadius={200}
      width={800}
      height={550}
      data={data}//מקבל את הגייסון של פירוט הטעמים במוצר
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject"  />
      <PolarRadiusAxis domain={[0, 5]} tickCount={6}/>
      <Radar
        name={item.name}
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
