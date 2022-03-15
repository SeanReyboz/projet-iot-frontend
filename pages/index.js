import Layout from "../app/components/layout"
import Dashboard from "../app/components/dashboard"

import styles from "../app/styles/Home.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Dashboard {...styles} />
        </main>
      </div>
    </Layout>
  )
}
