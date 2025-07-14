"use client"

import React from "react"

import * as styles from "../../../styles/common/loading-skeleton.css"

interface LoadingSkeletonProps {
  className?: string
  height?: string
  width?: string
  variant?: "text" | "rect" | "circle"
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = "",
  height = "1rem",
  width = "100%",
  variant = "rect",
}) => {
  const variantClass =
    variant === "text"
      ? styles.skeletonText
      : variant === "circle"
      ? styles.skeletonCircle
      : styles.skeletonRect

  return (
    <div
      className={`${styles.skeleton} ${variantClass} ${className}`}
      style={{ height, width }}
    />
  )
}

export default LoadingSkeleton
