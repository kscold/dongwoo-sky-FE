"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import * as styles from "@/styles/service/components/home/content-section.css"
import { WorkShowcase, CustomerReview } from "@/common/types/content"
import { motion } from "framer-motion"
import { HeartIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid"

interface ContentSectionProps {
  title?: string
  description?: string
  items: (WorkShowcase | CustomerReview)[]
  type: "work" | "review"
  link: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ContentSection({
  title,
  description,
  items,
  type,
  link,
}: ContentSectionProps) {
  const isWorkShowcase = type === "work"

  const renderRating = (rating: number) => (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={styles.metaIcon}
          style={{ color: i < rating ? "#f59e0b" : "#e0e0e0" }}
        />
      ))}
    </div>
  )

  return (
    <section className={styles.newsSection}>
      <header className={styles.newsSectionHeader}>
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.newsSectionTitle}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
        <Link href={link} className={styles.viewAllButton}>
          전체보기
        </Link>
      </header>
      <motion.div
        className={styles.newsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.slice(0, 5).map(item => (
          <motion.div key={item._id} variants={itemVariants}>
            <Link href={`${link}/${item._id}`} className={styles.newsCard}>
              <div className={styles.newsCardImage}>
                <Image
                  src={item.imageUrls?.[0] || "/assets/images/placeholder.png"}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.newsImage}
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
              <div className={styles.newsCardContent}>
                <h3 className={styles.newsCardTitle}>{item.title}</h3>
                <p className={styles.newsCardDesc}>
                  {(item as any).content ||
                    (isWorkShowcase
                      ? (item as WorkShowcase).projectLocation
                      : (item as CustomerReview).customerName + "님의 후기")}
                </p>
                <div className={styles.newsCardMeta}>
                  {isWorkShowcase && "author" in item && (
                    <div className={styles.metaItem}>
                      <UserIcon className={styles.metaIcon} />
                      <span>{(item as any).author}</span>
                    </div>
                  )}
                  {isWorkShowcase && "likes" in item && (
                    <div className={styles.metaItem}>
                      <HeartIcon className={styles.metaIcon} />
                      <span>{(item as any).likes}</span>
                    </div>
                  )}
                  {!isWorkShowcase && "customerName" in item && (
                    <div className={styles.metaItem}>
                      <UserIcon className={styles.metaIcon} />
                      <span>{(item as CustomerReview).customerName}</span>
                    </div>
                  )}
                  {!isWorkShowcase &&
                    "rating" in item &&
                    renderRating((item as CustomerReview).rating)}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
