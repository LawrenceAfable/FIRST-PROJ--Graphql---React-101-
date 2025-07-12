import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      {/* logo */}
      <div className={styles.logoSection}>
        <div className={styles.logoImg}>
          <img src="/map-logo.png" alt="logo" />
        </div>
        <p>
          <span>TicketFlow</span>
        </p>
      </div>

      {/* nav-links */}
      <div className={styles.navLinks}>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/ticket"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Ticket
        </NavLink>
      </div>

      {/* user section */}
      <div className={styles.userSection}>
        <div className={styles.notifBell}>
          <i className="fa fa-bell"></i>
        </div>
        <img
          className={styles.userAvatar}
          src="https://i.pinimg.com/736x/e6/50/7f/e6507f42d79520263d8d952633cedcf2.jpg"
          alt="Anime Avatar"
        />
      </div>
    </nav>
  );
}
