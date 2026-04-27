import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={styles.center}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome to your Dashboard 👋</h2>
          <p style={styles.subtitle}>Track your daily water intake to stay healthy.</p>
          <button style={styles.btn} onClick={() => navigate("/dashboard/water")}>
            Go to Water Tracker
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  center: { display: "flex", justifyContent: "center", marginTop: 60 },
  card: {
    background: "#fff", borderRadius: 12, padding: 32,
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)", width: 400, textAlign: "center",
  },
  title: { margin: "0 0 8px", color: "#0c4a6e", fontSize: 22 },
  subtitle: { color: "#6b7280", marginBottom: 24 },
  btn: {
    background: "#0ea5e9", color: "#fff", border: "none",
    padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontSize: 15,
  },
};
