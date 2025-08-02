import React from "react"
import Link from "next/link"
import * as styles from "../styles"

export const PricingCTA: React.FC = () => {
  return (
    <div className={styles.pricingButtonContainer}>
      <Link href="/pricing" passHref>
        <button className={styles.pricingButton}>
          이용 요금 확인하기
        </button>
      </Link>
    </div>
  )
}