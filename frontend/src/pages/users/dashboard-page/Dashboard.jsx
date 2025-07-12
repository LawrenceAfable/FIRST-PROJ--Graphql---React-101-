// nav
import Nav from "../../../components/navigation/Nav";

// styles
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <main className={styles.dashboardPage}>
        <section className={styles.dpHeader}>
          <h1>Welcome, <span>User!</span></h1>
        </section>
        <section className={styles.dpBody}>
          <div className={styles.dpCard}>
            <h2>Dashboard</h2>
            <p>This is your dashboard where you can manage your account and view your activity.</p>
          </div>
          <div className={styles.dpCard}>
            <h2>Recent Activity</h2>
            <p>Here you can see your recent activity on the platform.</p>
          </div>
          <div className={styles.dpCard}>
            <h2>Settings</h2>
            <p>Manage your account settings and preferences here.</p>
          </div>
        </section>
      </main>
    </>
  );
}
