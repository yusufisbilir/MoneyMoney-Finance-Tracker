import styles from "./Home.module.css";
import React from "react";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";

function Home() {
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>transaction list</h1>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

export default Home;
