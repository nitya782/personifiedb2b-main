'use client';

import React, { useEffect, useState } from 'react';

const statsData = [
  { value: 2425, label: 'Completed Projects' },
  { value: 98.09, label: 'Customer Satisfaction (%)' },
  { value: 99, label: 'Conversion Rate (%)' },
  { value: 67, label: 'Global Awards' },
  { value: 23, label: 'Total Happy Customers' },
];

const ProjectStatsComponent = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increments = statsData.map(({ value }) => value / steps);

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          Math.min(count + increments[index], statsData[index].value)
        )
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (val, label) => {
    const isDecimal = label.includes('%') || val < 100;
    const suffix = label.includes('%') ? '%' : '+';
    return `${isDecimal ? val.toFixed(1) : Math.round(val)}${suffix}`;
  };

  return (
    <div className="bg-[#f3c553] flex flex-wrap justify-center py-10 text-center">
      {statsData.map((stat, index) => (
        <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/5 p-4">
          <h2 className="text-4xl font-bold text-[#1e2e28]">
            {formatValue(counts[index], stat.label)}
          </h2>
          <p className="text-lg text-[#1e2e28] mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStatsComponent;