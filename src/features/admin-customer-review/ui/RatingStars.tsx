import * as styles from "./rating-stars.css"

interface RatingStarsProps {
  rating: number
  maxRating?: number
}

export function RatingStars({ rating, maxRating = 5 }: RatingStarsProps) {
  return (
    <div className={styles.container}>
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}