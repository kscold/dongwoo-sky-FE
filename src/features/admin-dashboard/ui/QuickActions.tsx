import Link from "next/link"
import { QUICK_ACTIONS } from "../lib/dashboard.constants"
import * as styles from "./quick-actions.css"

export function QuickActions() {
  return (
    <div className={styles.grid}>
      {QUICK_ACTIONS.map((action) => (
        <Link key={action.href} href={action.href} className={styles.card}>
          <div className={styles.icon}>{action.icon}</div>
          <h3 className={styles.title}>{action.title}</h3>
          <p className={styles.description}>{action.description}</p>
        </Link>
      ))}
    </div>
  )
}