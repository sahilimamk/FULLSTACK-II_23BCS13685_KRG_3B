import { memo } from "react";

const CounterDisplay = memo(({ count, goal }) => {
  console.log("[CounterDisplay] rendered"); // Teacher can verify in console

  return (
    <div style={styles.counterDisplay}>
      <span style={styles.countNumber}>{count}</span>
      <span style={styles.countSep}>/</span>
      <span style={styles.countGoal}>{goal}</span>
      <span style={styles.countLabel}>glasses completed</span>
    </div>
  );
});

export default CounterDisplay;

const styles = {
  counterDisplay: {
    display: "flex", alignItems: "baseline", gap: 6,
    margin: "16px 0", background: "#f0f9ff", borderRadius: 10, padding: "16px 20px",
  },
  countNumber: { fontSize: 48, fontWeight: 700, color: "#0ea5e9" },
  countSep: { fontSize: 28, color: "#94a3b8" },
  countGoal: { fontSize: 28, color: "#64748b" },
  countLabel: { fontSize: 14, color: "#64748b", marginLeft: 8 },
};
