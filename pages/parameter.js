import Layout from "../app/components/layout"
import Setting from "../app/components/setting"

import styles from "../app/styles/Parameter.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Setting {...styles} />
        </main>
      </div>
    </Layout>
  )
}
