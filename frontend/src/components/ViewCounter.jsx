import React, { useEffect, useRef, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(0);
  const endpoint = "https://api.artemshmahaylo.com/counter";
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (hasIncremented.current) return;
    hasIncremented.current = true;

    fetch(endpoint, { method: "POST" })
      .then(res => res.json())
      .then(data => setCount(Number(data.count) || 0))
      .catch(err => console.error("Error updating view count:", err));
  }, []);

  return (
    <div className="view-counter">
      <span className="count">{count}</span>
      <span className="label">views</span>
    </div>
  );
}
