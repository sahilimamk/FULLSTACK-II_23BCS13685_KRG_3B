import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";
import HealthTip from "../components/HealthTip";

export default function WaterTrackerPage() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("eco_water_count");
    return saved ? parseInt(saved) : 0;
  });
  const [goal, setGoal] = useState(8);
  const [goalInput, setGoalInput] = useState(8);
  const [dummy, setDummy] = useState(0); // for testing memo

  // Save count to localStorage on every change
  useEffect(() => {
    localStorage.setItem("eco_water_count", count);
  }, [count]);

  // useCallback prevents CounterDisplay from re-rendering
  const addWater = useCallback(() => setCount((c) => c + 1), []);
  const removeWater = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);
  const reset = useCallback(() => setCount(0), []);

  const saveGoal = () => setGoal(Number(goalInput));

  return (
    <>
      <Navbar />
      <div style={styles.center}>
        <div style={styles.card}>
          <h2 style={styles.title}>Daily Water Tracker 💧</h2>

          {/* Memoized counter — won't re-render on unrelated state change */}
          <CounterDisplay count={count} goal={goal} />

          {count >= goal && (
            <div style={styles.goalMsg}>🎉 Goal Reached!</div>
          )}

          {/* Add / Remove / Reset */}
          <div style={styles.btnRow}>
            <button style={styles.circleBtn} onClick={addWater}>＋</button>
            <button style={{ ...styles.circleBtn, background: "#fee2e2", color: "#dc2626" }} onClick={removeWater}>－</button>
            <button style={{ ...styles.circleBtn, background: "#f3f4f6", color: "#374151" }} onClick={reset}>Reset</button>
          </div>

          {/* Goal setting */}
          <div style={styles.goalRow}>
            <label style={styles.label}>Daily Goal:</label>
            <input
              type="number"
              min={1}
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              style={styles.input}
            />
            <button style={styles.saveBtn} onClick={saveGoal}>Save Goal</button>
          </div>

          {/* Health Tip */}
          <HealthTip />

          {/* Unrelated button to test React.memo */}
          <div style={styles.testRow}>
            <span style={styles.testLabel}>Test re-render prevention:</span>
            <button style={styles.saveBtn} onClick={() => setDummy((d) => d + 1)}>
              Unrelated Click ({dummy})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  center: { display: "flex", justifyContent: "center", marginTop: 40 },
  card: {
    background: "#fff", borderRadius: 12, padding: 32,
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)", width: "100%", maxWidth: 460,
  },
  title: { margin: "0 0 8px", color: "#0c4a6e", fontSize: 22 },
  goalMsg: {
    background: "#dcfce7", color: "#16a34a", borderRadius: 8,
    padding: "8px 16px", fontWeight: 600, marginBottom: 12, textAlign: "center",
  },
  btnRow: { display: "flex", gap: 12, margin: "16px 0" },
  circleBtn: {
    width: 52, height: 52, borderRadius: "50%", border: "none",
    background: "#dbeafe", color: "#1d4ed8", fontSize: 22,
    cursor: "pointer", fontWeight: 700,
  },
  goalRow: { display: "flex", alignItems: "center", gap: 8, margin: "16px 0" },
  label: { fontSize: 14, color: "#374151", whiteSpace: "nowrap" },
  input: {
    width: 60, padding: "6px 8px", borderRadius: 6,
    border: "1px solid #d1d5db", fontSize: 14, textAlign: "center",
  },
  saveBtn: {
    background: "#0ea5e9", color: "#fff", border: "none",
    padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13,
  },
  testRow: {
    marginTop: 16, borderTop: "1px solid #e5e7eb",
    paddingTop: 12, display: "flex", alignItems: "center", gap: 8,
  },
  testLabel: { fontSize: 12, color: "#9ca3af" },
};
