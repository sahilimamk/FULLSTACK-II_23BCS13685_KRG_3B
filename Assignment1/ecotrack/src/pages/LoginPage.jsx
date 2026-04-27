import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div style={styles.center}>
      <div style={styles.card}>
        <h2 style={styles.title}>💧 EcoTrack Login</h2>
        <p style={styles.subtitle}>Click below to sign in</p>
        <button style={styles.btn} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  center: { display: "flex", justifyContent: "center", marginTop: 80 },
  card: {
    background: "#fff", borderRadius: 12, padding: 32,
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)", width: 360, textAlign: "center",
  },
  title: { margin: "0 0 8px", color: "#0c4a6e", fontSize: 24 },
  subtitle: { color: "#6b7280", marginBottom: 24 },
  btn: {
    background: "#0ea5e9", color: "#fff", border: "none",
    padding: "10px 32px", borderRadius: 8, cursor: "pointer", fontSize: 15,
  },
};
