import React, { useEffect, useState } from 'react';
import './line.scss';

const RedLine = () => {
  let lineStyle = { marginTop: new Date().getHours() * 60 + new Date().getMinutes() - 15 };

  useEffect(() => {
    const interval = setInterval(() => {
      lineStyle = { marginTop: new Date().getHours() * 60 + new Date().getMinutes() - 15 };
    }, 60000);
    return () => clearInterval(interval);
  });

  return <div style={lineStyle} className="redline"></div>;
};

export default RedLine;
