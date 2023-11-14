import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const BehavioralAnalytics = ({ data: originalData }) => {
  const newData = originalData.reduce((acc, currentValue) => {
    const existingItem = acc.find((item) => item.name === currentValue);

    if (existingItem) {
      existingItem.value += 1;
    } else {
      acc.push({ name: currentValue, value: 1 });
    }

    return acc;
  }, []);

  console.log(newData);
  const COLORS = ["#10A41E", "#B80F0F"];
  return (
    <div className="relative">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={newData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label="name"
        >
          {newData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="absolute bottom-10 right-1/4">
        <p className="flex gap-2">
          <p style={{ background: `${COLORS[0]}` }} className={` w-5 h-5`}></p>
          <span>Good</span>
        </p>
        <p className="flex gap-2">
          <p style={{ background: `${COLORS[1]}` }} className={` w-5 h-5`}></p>
          <span>Bad</span>
        </p>
      </div>
    </div>
  );
};

export default BehavioralAnalytics;
