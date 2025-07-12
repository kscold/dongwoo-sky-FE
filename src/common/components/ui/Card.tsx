"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as styles from "@/styles/components/card.css"

interface CardProps {
  id: string
  title: string
  description: string
  imageUrl?: string
  imagePlaceholder?: string
  href: string
  meta?: React.ReactNode
  stats?: React.ReactNode
  className?: string
}

export default function Card({
  id,
  title,
  description,
  imageUrl,
  imagePlaceholder = "📋",
  href,
  meta,
  stats,
  className = "",
}: CardProps) {
  return (
    <Link href={href} className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            className={styles.image}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.imagePlaceholder}>{imagePlaceholder}</div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        {meta && <div className={styles.meta}>{meta}</div>}
        
        <p className={styles.description}>{description}</p>
        
        {stats && <div className={styles.stats}>{stats}</div>}
      </div>
    </Link>
  )
}