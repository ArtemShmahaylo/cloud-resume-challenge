import React, { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(0);
  const endpoint = "https://57y53b4ht0.execute-api.us-east-1.amazonaws.com/Prod/counter/"; // пусто! потому что мок живёт на /counter

  useEffect(() => {
    fetch("/counter")
      .then(res => res.json())
      .then(data => setCount(Number(data.count) || 0))
      .catch(err => console.error("Error fetching count:", err));
  }, []);

  const increment = () => {
    fetch("/counter", { method: "POST" })
      .then(res => res.json())
      .then(data => setCount(Number(data.count) || 0))
      .catch(err => console.error("Error incrementing count:", err));
  };

  return (
    <div className="view-counter" onClick={increment}>
      <span className="count">{count}</span>
      <span className="label">views</span>
    </div>
  );
}
