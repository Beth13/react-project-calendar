import React, { useEffect, useState } from "react";
import "./line.scss";

const Line = () => {
  const [lineStyle, setLineStyle] = useState({
    marginTop: new Date().getHours() * 60 + new Date().getMinutes() - 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLineStyle({
        marginTop: new Date().getHours() * 60 + new Date().getMinutes() - 15,
      });
    }, 60000);
    return () => clearInterval(interval);
  });

  return <div style={lineStyle} className="redline"></div>;
};

export default Line;
