import { useState, useEffect } from "react";

export default function HealthTip() {
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch("https://corsproxy.io/?url=https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setTip(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load health tip.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.tipBox}>
      {loading && <span style={{ color: "#6b7280" }}>Loading health tip…</span>}
      {error && <span style={{ color: "#dc2626" }}>{error}</span>}
      {!loading && !error && (
        <span><b>Today's Health Tip:</b> {tip}</span>
      )}
    </div>
  );
}

const styles = {
  tipBox: {
    background: "#f8fafc", border: "1px solid #e2e8f0",
    borderRadius: 8, padding: "12px 16px", fontSize: 14,
    color: "#334155", marginTop: 8, lineHeight: 1.5,
  },
};
