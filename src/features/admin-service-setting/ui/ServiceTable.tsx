import React from "react"
import { Service } from "../../../types/service"
import * as styles from "../../../styles/common/admin-common.css"

interface ServiceTableProps {
  services: Service[]
  onEdit: (service: Service) => void
  onDelete: (id: string) => void
}

export const ServiceTable: React.FC<ServiceTableProps> = ({ services, onEdit, onDelete }) => {
  if (services.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>📋</div>
        <div className={styles.emptyStateText}>등록된 서비스가 없습니다</div>
        <div className={styles.emptyStateSubtext}>
          새 서비스를 추가해보세요.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>순서</th>
            <th className={styles.tableHeader}>제목</th>
            <th className={styles.tableHeader}>설명</th>
            <th className={styles.tableHeader}>상태</th>
            <th className={styles.tableHeader}>작업</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td className={styles.tableCell}>{service.sortOrder}</td>
              <td className={styles.tableCell}>{service.title}</td>
              <td className={styles.tableCell}>
                {service.description.length > 100
                  ? `${service.description.substring(0, 100)}...`
                  : service.description}
              </td>
              <td className={styles.tableCell}>
                <span
                  className={
                    service.isActive
                      ? styles.activeBadge
                      : styles.inactiveBadge
                  }
                >
                  {service.isActive ? "활성" : "비활성"}
                </span>
              </td>
              <td className={styles.tableCell}>
                <button
                  className={styles.editButton}
                  onClick={() => onEdit(service)}
                >
                  수정
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => onDelete(service._id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}