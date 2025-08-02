import React from "react"
import { ContactInquiry } from "../types"
import * as styles from "../../../../styles/admin/admin-contact.css"

interface FilterSectionProps {
  filter: "all" | "pending" | "processing"
  onFilterChange: (filter: "all" | "pending" | "processing") => void
  contacts: ContactInquiry[]
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  filter,
  onFilterChange,
  contacts,
}) => {
  return (
    <div className={styles.filterSection}>
      <button
        className={`${styles.filterButton} ${
          filter === "all" ? styles.filterButtonActive : ""
        }`}
        onClick={() => onFilterChange("all")}
      >
        전체 ({contacts.length})
      </button>
      <button
        className={`${styles.filterButton} ${
          filter === "pending" ? styles.filterButtonActive : ""
        }`}
        onClick={() => onFilterChange("pending")}
      >
        대기중 ({contacts.filter((c) => c.status === "pending").length})
      </button>
      <button
        className={`${styles.filterButton} ${
          filter === "processing" ? styles.filterButtonActive : ""
        }`}
        onClick={() => onFilterChange("processing")}
      >
        처리중 ({contacts.filter((c) => c.status === "processing").length})
      </button>
    </div>
  )
}