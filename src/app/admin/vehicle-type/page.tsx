"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { useAdmin } from "../../../common/context/AdminContext"
import { vehicleTypeApi } from "../../../api/vehicle-type"
import {
  VehicleType,
  CreateVehicleTypeDto,
  UpdateVehicleTypeDto,
} from "../../../common/types/vehicle-type"
import * as AdminCommon from "../../../styles/admin/admin-common.css"

export default function AdminVehicleTypePage() {
  const { logout } = useAdmin()

  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingVehicleType, setEditingVehicleType] =
    useState<VehicleType | null>(null)
  const [formData, setFormData] = useState<CreateVehicleTypeDto>({
    name: "",
    type: "ladder",
    iconUrl: "",
    description: "",
    isActive: true,
    sortOrder: 0,
    priceRanges: [],
    specifications: "",
  })

  // 차량 타입 목록 조회
  const fetchVehicleTypes = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await vehicleTypeApi.getAllAdmin()
      setVehicleTypes(data)
    } catch (error) {
      console.error("차량 타입 조회 오류:", error)
      setError("차량 타입을 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVehicleTypes()
  }, [])

  // 폼 리셋
  const resetForm = () => {
    setFormData({
      name: "",
      type: "ladder",
      iconUrl: "",
      description: "",
      isActive: true,
      sortOrder: 0,
      priceRanges: [],
      specifications: "",
    })
    setEditingVehicleType(null)
  }

  // 모달 열기
  const openModal = (vehicleType?: VehicleType) => {
    if (vehicleType) {
      setEditingVehicleType(vehicleType)
      setFormData({
        name: vehicleType.name,
        type: vehicleType.type,
        iconUrl: vehicleType.iconUrl || "",
        description: vehicleType.description || "",
        isActive: vehicleType.isActive,
        sortOrder: vehicleType.sortOrder,
        priceRanges: vehicleType.priceRanges,
        specifications: vehicleType.specifications || "",
      })
    } else {
      resetForm()
    }
    setIsModalOpen(true)
  }

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false)
    resetForm()
    setError(null)
    setSuccess(null)
  }

  // 차량 타입 저장
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setError(null)
      setSuccess(null)

      if (editingVehicleType) {
        // 수정
        await vehicleTypeApi.update(
          editingVehicleType._id,
          formData as UpdateVehicleTypeDto
        )
        setSuccess("차량 타입이 성공적으로 수정되었습니다.")
      } else {
        // 생성
        await vehicleTypeApi.create(formData)
        setSuccess("차량 타입이 성공적으로 생성되었습니다.")
      }

      await fetchVehicleTypes()
      closeModal()
    } catch (error) {
      console.error("차량 타입 저장 오류:", error)
      setError("차량 타입 저장에 실패했습니다.")
    }
  }

  // 차량 타입 삭제
  const handleDelete = async (id: string) => {
    if (!confirm("정말로 이 차량 타입을 삭제하시겠습니까?")) {
      return
    }

    try {
      setError(null)
      await vehicleTypeApi.delete(id)
      setSuccess("차량 타입이 성공적으로 삭제되었습니다.")
      await fetchVehicleTypes()
    } catch (error) {
      console.error("차량 타입 삭제 오류:", error)
      setError("차량 타입 삭제에 실패했습니다.")
    }
  }

  // 배열 필드 업데이트 함수
  const updateArrayField = (field: "priceRanges", value: string) => {
    const items = value.split("\n").filter((item) => item.trim() !== "")
    setFormData((prev) => ({ ...prev, [field]: items }))
  }

  return (
    <div className={AdminCommon.adminContainer}>
      <div className={AdminCommon.adminHeader}>
        <h1 className={AdminCommon.adminTitle}>차량 타입 관리</h1>
        <div className={AdminCommon.adminButtonGroup}>
          <button
            className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonPrimary}`}
            onClick={() => openModal()}
          >
            차량 타입 추가
          </button>
          <button
            className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonSecondary}`}
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className={AdminCommon.adminContent}>
        {error && <div className={AdminCommon.adminError}>{error}</div>}
        {success && <div className={AdminCommon.adminSuccess}>{success}</div>}

        {loading ? (
          <div className={AdminCommon.adminLoadingSpinner}>로딩 중...</div>
        ) : (
          <table className={AdminCommon.adminTable}>
            <thead>
              <tr className={AdminCommon.adminTableHeader}>
                <th className={AdminCommon.adminTableCell}>이름</th>
                <th className={AdminCommon.adminTableCell}>타입</th>
                <th className={AdminCommon.adminTableCell}>설명</th>
                <th className={AdminCommon.adminTableCell}>아이콘</th>
                <th className={AdminCommon.adminTableCell}>상태</th>
                <th className={AdminCommon.adminTableCell}>정렬순서</th>
                <th className={AdminCommon.adminTableCell}>작업</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicleType) => (
                <tr key={vehicleType._id} className={AdminCommon.adminTableRow}>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.name}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.type === "ladder"
                      ? "일반 사다리차"
                      : "스카이 사다리차"}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.description &&
                    vehicleType.description.length > 30
                      ? `${vehicleType.description.substring(0, 30)}...`
                      : vehicleType.description || "-"}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.iconUrl ? (
                      <Image
                        src={vehicleType.iconUrl}
                        alt={vehicleType.name}
                        width={30}
                        height={30}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.isActive ? "활성" : "비활성"}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {vehicleType.sortOrder}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    <div className={AdminCommon.adminButtonGroup}>
                      <button
                        className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonSecondary}`}
                        onClick={() => openModal(vehicleType)}
                      >
                        수정
                      </button>
                      <button
                        className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonDanger}`}
                        onClick={() => handleDelete(vehicleType._id)}
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className={AdminCommon.adminModal}>
          <div className={AdminCommon.adminModalContent}>
            <h2>{editingVehicleType ? "차량 타입 수정" : "차량 타입 추가"}</h2>

            <form onSubmit={handleSave} className={AdminCommon.adminForm}>
              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="name" className={AdminCommon.adminLabel}>
                  차량 이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  className={AdminCommon.adminInput}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="type" className={AdminCommon.adminLabel}>
                  차량 타입 *
                </label>
                <select
                  id="type"
                  className={AdminCommon.adminInput}
                  value={formData.type}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      type: e.target.value as "ladder" | "sky",
                    }))
                  }
                  required
                >
                  <option value="ladder">일반 사다리차</option>
                  <option value="sky">스카이 사다리차</option>
                </select>
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="description" className={AdminCommon.adminLabel}>
                  설명
                </label>
                <textarea
                  id="description"
                  className={AdminCommon.adminTextarea}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="iconUrl" className={AdminCommon.adminLabel}>
                  아이콘 URL
                </label>
                <input
                  type="url"
                  id="iconUrl"
                  className={AdminCommon.adminInput}
                  value={formData.iconUrl}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      iconUrl: e.target.value,
                    }))
                  }
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label
                  htmlFor="specifications"
                  className={AdminCommon.adminLabel}
                >
                  사양 정보
                </label>
                <textarea
                  id="specifications"
                  className={AdminCommon.adminTextarea}
                  value={formData.specifications}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specifications: e.target.value,
                    }))
                  }
                  rows={3}
                  placeholder="차량 사양, 용량, 크기 등"
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="priceRanges" className={AdminCommon.adminLabel}>
                  가격대 정보 (한 줄에 하나씩)
                </label>
                <textarea
                  id="priceRanges"
                  className={AdminCommon.adminTextarea}
                  value={formData.priceRanges?.join("\n") || ""}
                  onChange={(e) =>
                    updateArrayField("priceRanges", e.target.value)
                  }
                  rows={4}
                  placeholder="기본 요금: 100,000원&#10;추가 시간당: 20,000원&#10;야간 할증: 30%"
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="sortOrder" className={AdminCommon.adminLabel}>
                  정렬 순서
                </label>
                <input
                  type="number"
                  id="sortOrder"
                  className={AdminCommon.adminInput}
                  value={formData.sortOrder}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      sortOrder: parseInt(e.target.value) || 0,
                    }))
                  }
                  min="0"
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label className={AdminCommon.adminLabel}>
                  <input
                    type="checkbox"
                    className={AdminCommon.adminCheckbox}
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isActive: e.target.checked,
                      }))
                    }
                  />
                  활성화
                </label>
              </div>

              {error && <div className={AdminCommon.adminError}>{error}</div>}
              {success && (
                <div className={AdminCommon.adminSuccess}>{success}</div>
              )}

              <div className={AdminCommon.adminButtonGroup}>
                <button
                  type="submit"
                  className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonPrimary}`}
                >
                  {editingVehicleType ? "수정" : "생성"}
                </button>
                <button
                  type="button"
                  className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonSecondary}`}
                  onClick={closeModal}
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
