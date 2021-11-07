import styles from "./Home.module.css";
import React from "react";
import TransactionForm from "./TransactionForm";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>transaction list</h1>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
