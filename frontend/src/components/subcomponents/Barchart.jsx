import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Barchart() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[
        { name: "Series 1", data: [4, 3, 5] },
        { name: "Series 2", data: [1, 6, 3] },
      ]}
      width={500}
      height={300}
    />
  );
}
