import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <span style={styles.brand}>💧 EcoTrack</span>
      <div style={styles.navLinks}>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/dashboard/water" style={styles.navLink}>Water Tracker</Link>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "12px 24px", background: "#0ea5e9", color: "#fff",
  },
  brand: { fontWeight: 700, fontSize: 20 },
  navLinks: { display: "flex", gap: 8, alignItems: "center" },
  navLink: {
    color: "#e0f2fe", textDecoration: "none",
    padding: "6px 12px", borderRadius: 6, fontSize: 14,
  },
  logoutBtn: {
    background: "#dc2626", border: "none", color: "#fff",
    cursor: "pointer", padding: "6px 12px", borderRadius: 6, fontSize: 14,
  },
};
