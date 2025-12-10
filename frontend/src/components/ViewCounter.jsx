import React, { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "https://cuddly-winner-5gx4vp7q4vpwhp6xx-8000.app.github.dev/counter";

  async function fetchCount() {
    try {
      console.log("Fetching from:", API_URL);
      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      
      const data = await res.json();
      console.log("Received data:", data);
      setCount(data.count);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    }
  }

  async function increment() {
    try {
      const res = await fetch(API_URL, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      
      const data = await res.json();
      setCount(data.count);
      setError(null);
    } catch (err) {
      console.error("Post error:", err);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="view-counter" onClick={increment}>
      <span className="count">
        {error ? "❌" : count === null ? "..." : count}
      </span>
      <span className="label">views</span>
      {error && <div style={{fontSize: "10px", color: "red"}}>{error}</div>}
    </div>
  );
}