import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
// import { desktopOS, valueFormatter } from "./webUsageStats";

const desktopOS = [
  { name: "Windows", value: 60 },
  { name: "macOS", value: 30 },
  { name: "Linux", value: 10 },
];

const valueFormatter = (value) => `${value}%`;
export default function PieArcLabel() {
  // webUsageStats.js
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: "60%",
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
