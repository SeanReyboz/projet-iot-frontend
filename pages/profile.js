import Layout from "../app/components/layout"
import Profile from "../app/components/profile"

import styles from "../app/styles/Profile.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Profile {...styles} />
        </main>
      </div>
    </Layout>
  )
}
