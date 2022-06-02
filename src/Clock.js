
import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clock" style={{ fontSize: "15px", margin: "15px"   }}>{clockState}</div>;
}

export default Clock;