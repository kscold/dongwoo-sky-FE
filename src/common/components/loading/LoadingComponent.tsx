"use client"

import React from "react"
import * as styles from "../../../styles/service/components/loading.css"

const LoadingComponent = () => (
    <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
    </div>
)

export default LoadingComponent 