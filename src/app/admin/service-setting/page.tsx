"use client"

import React, { useState, useEffect } from "react"
import { serviceApi } from "@/api/service"
import {
  Service,
  CreateServiceDto,
  UpdateServiceDto,
} from "@/common/types/service"
import { useAdmin } from "@/common/context/AdminContext"
import * as styles from "@/styles/common/admin-common.css"

export default function AdminServicePage() {
  const { isAuthenticated } = useAdmin()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [formData, setFormData] = useState<CreateServiceDto>({
    title: "",
    description: "",
    isActive: true,
    sortOrder: 0,
    icon: "",
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const data = await serviceApi.getAllAdmin()
      setServices(data)
      setError(null)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "서비스 목록을 불러오는데 실패했습니다."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = () => {
    setEditingService(null)
    setFormData({
      title: "",
      description: "",
      isActive: true,
      sortOrder: services.length,
      icon: "",
    })
    setShowModal(true)
  }

  const handleEdit = (service: Service) => {
    setEditingService(service)
    setFormData({
      title: service.title,
      description: service.description,
      isActive: service.isActive,
      sortOrder: service.sortOrder,
      icon: service.icon || "",
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("정말로 이 서비스를 삭제하시겠습니까?")) {
      try {
        await serviceApi.delete(id)
        await fetchServices()
      } catch (err) {
        alert(err instanceof Error ? err.message : "삭제에 실패했습니다.")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingService) {
        await serviceApi.update(
          editingService._id,
          formData as UpdateServiceDto
        )
      } else {
        await serviceApi.create(formData)
      }
      setShowModal(false)
      await fetchServices()
    } catch (err) {
      alert(err instanceof Error ? err.message : "저장에 실패했습니다.")
    }
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>서비스 목록을 불러오는 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>서비스 관리</h1>
        <p className={styles.description}>작업 가능 범위를 관리합니다.</p>
      </div>

      <button className={styles.addButton} onClick={handleCreate}>
        새 서비스 추가
      </button>

      {services.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>📋</div>
          <div className={styles.emptyStateText}>등록된 서비스가 없습니다</div>
          <div className={styles.emptyStateSubtext}>
            새 서비스를 추가해보세요.
          </div>
        </div>
      ) : (
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
                      onClick={() => handleEdit(service)}
                    >
                      수정
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(service._id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalHeader}>
              {editingService ? "서비스 수정" : "새 서비스 추가"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>제목</label>
                <input
                  type="text"
                  className={styles.input}
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>설명</label>
                <textarea
                  className={styles.textarea}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>아이콘 URL (선택사항)</label>
                <input
                  type="url"
                  className={styles.input}
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>순서</label>
                <input
                  type="number"
                  className={styles.input}
                  value={formData.sortOrder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sortOrder: parseInt(e.target.value),
                    })
                  }
                  min="0"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                    style={{ marginRight: "8px" }}
                  />
                  활성화
                </label>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  취소
                </button>
                <button type="submit" className={styles.saveButton}>
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
