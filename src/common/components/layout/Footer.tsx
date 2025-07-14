import React from "react"

import * as styles from "../../../styles/service/layout/footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.copyrightText}>
          &copy; {currentYear} SKY WORK. All rights reserved.
        </p>
        <div className={styles.footerLinks}></div>
      </div>
    </footer>
  )
}

export default Footer
