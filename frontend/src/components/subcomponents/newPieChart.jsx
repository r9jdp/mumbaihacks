import React, { useEffect } from "react";
import "./PieChart.css"; // Make sure to create a separate CSS file for styles
import $ from "jquery";

const PieChart = ({ data }) => {
  useEffect(() => {
    createPie(".pieID.legend", ".pieID.pie", data);
  }, [data]);

  const sliceSize = (dataNum, dataTotal) => {
    return (dataNum / dataTotal) * 360;
  };

  const addSlice = (sliceSize, pieElement, offset, sliceID, color) => {
    $(pieElement).append(`<div class='slice ${sliceID}'><span></span></div>`);
    const sizeRotation = -179 + sliceSize;
    $(`.${sliceID}`).css({
      transform: `rotate(${offset - 1}deg) translate3d(0,0,0)`,
    });
    $(`.${sliceID} span`).css({
      transform: `rotate(${sizeRotation}deg) translate3d(0,0,0)`,
      backgroundColor: color,
    });
  };

  const iterateSlices = (
    sliceSize,
    pieElement,
    offset,
    dataCount,
    sliceCount,
    color
  ) => {
    const sliceID = `s${dataCount}-${sliceCount}`;
    const maxSize = 179;
    if (sliceSize <= maxSize) {
      addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(maxSize, pieElement, offset, sliceID, color);
      iterateSlices(
        sliceSize - maxSize,
        pieElement,
        offset + maxSize,
        dataCount,
        sliceCount + 1,
        color
      );
    }
  };

  const createPie = (dataElement, pieElement, data) => {
    const listData = data.map((item) => item.value);
    const listTotal = listData.reduce((sum, value) => sum + value, 0);
    let offset = 0;
    const colors = [
      "red",
      "green",
      "orange",
      "tomato",
      "crimson",
      "purple",
      "turquoise",
      "forestgreen",
      "navy",
      "gray",
    ];

    listData.forEach((value, i) => {
      const size = sliceSize(value, listTotal);
      iterateSlices(size, pieElement, offset, i, 0, colors[i % colors.length]);
      $(`${dataElement} li:nth-child(${i + 1})`).css(
        "border-color",
        colors[i % colors.length]
      );
      offset += size;
    });
  };

  return (
    <main>
      <section>
        <div className="pieID pie"></div>
        <ul className="pieID legend">
          {data.map((item, index) => (
            <li key={index}>
              <em>{item.label}</em>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </section>
      <h1 className="text-xl font-bold">Your Financial Overview</h1>
    </main>
  );
};

export default PieChart;
