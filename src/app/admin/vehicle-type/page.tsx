"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAdmin } from "@/context/AdminContext"
import { vehicleTypeApi } from "@/api/vehicle-type"
import {
  VehicleType,
  CreateVehicleTypeDto,
  UpdateVehicleTypeDto,
} from "@/types/vehicle-type"
import {
  adminContainer,
  adminHeader,
  adminTitle,
  adminContent,
  adminTable,
  adminTableHeader,
  adminTableRow,
  adminTableCell,
  adminButton,
  adminButtonPrimary,
  adminButtonSecondary,
  adminButtonDanger,
  adminModal,
  adminModalContent,
  adminForm,
  adminFormGroup,
  adminLabel,
  adminInput,
  adminTextarea,
  adminCheckbox,
  adminButtonGroup,
  adminLoadingSpinner,
  adminError,
  adminSuccess,
} from "@/styles/admin/AdminCommon.css"

export default function AdminVehicleTypePage() {
  const router = useRouter()
  const { isLoggedIn, logout } = useAdmin()

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

  // 로그인 확인
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login")
    }
  }, [isLoggedIn, router])

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
    if (isLoggedIn) {
      fetchVehicleTypes()
    }
  }, [isLoggedIn])

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

  if (!isLoggedIn) {
    return <div>로그인이 필요합니다.</div>
  }

  return (
    <div className={adminContainer}>
      <div className={adminHeader}>
        <h1 className={adminTitle}>차량 타입 관리</h1>
        <div className={adminButtonGroup}>
          <button
            className={`${adminButton} ${adminButtonPrimary}`}
            onClick={() => openModal()}
          >
            차량 타입 추가
          </button>
          <button
            className={`${adminButton} ${adminButtonSecondary}`}
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className={adminContent}>
        {error && <div className={adminError}>{error}</div>}
        {success && <div className={adminSuccess}>{success}</div>}

        {loading ? (
          <div className={adminLoadingSpinner}>로딩 중...</div>
        ) : (
          <table className={adminTable}>
            <thead>
              <tr className={adminTableHeader}>
                <th className={adminTableCell}>이름</th>
                <th className={adminTableCell}>타입</th>
                <th className={adminTableCell}>설명</th>
                <th className={adminTableCell}>아이콘</th>
                <th className={adminTableCell}>상태</th>
                <th className={adminTableCell}>정렬순서</th>
                <th className={adminTableCell}>작업</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicleType) => (
                <tr key={vehicleType._id} className={adminTableRow}>
                  <td className={adminTableCell}>{vehicleType.name}</td>
                  <td className={adminTableCell}>
                    {vehicleType.type === "ladder"
                      ? "일반 사다리차"
                      : "스카이 사다리차"}
                  </td>
                  <td className={adminTableCell}>
                    {vehicleType.description &&
                    vehicleType.description.length > 30
                      ? `${vehicleType.description.substring(0, 30)}...`
                      : vehicleType.description || "-"}
                  </td>
                  <td className={adminTableCell}>
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
                  <td className={adminTableCell}>
                    {vehicleType.isActive ? "활성" : "비활성"}
                  </td>
                  <td className={adminTableCell}>{vehicleType.sortOrder}</td>
                  <td className={adminTableCell}>
                    <div className={adminButtonGroup}>
                      <button
                        className={`${adminButton} ${adminButtonSecondary}`}
                        onClick={() => openModal(vehicleType)}
                      >
                        수정
                      </button>
                      <button
                        className={`${adminButton} ${adminButtonDanger}`}
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
        <div className={adminModal}>
          <div className={adminModalContent}>
            <h2>{editingVehicleType ? "차량 타입 수정" : "차량 타입 추가"}</h2>

            <form onSubmit={handleSave} className={adminForm}>
              <div className={adminFormGroup}>
                <label htmlFor="name" className={adminLabel}>
                  차량 이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  className={adminInput}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </div>

              <div className={adminFormGroup}>
                <label htmlFor="type" className={adminLabel}>
                  차량 타입 *
                </label>
                <select
                  id="type"
                  className={adminInput}
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

              <div className={adminFormGroup}>
                <label htmlFor="description" className={adminLabel}>
                  설명
                </label>
                <textarea
                  id="description"
                  className={adminTextarea}
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

              <div className={adminFormGroup}>
                <label htmlFor="iconUrl" className={adminLabel}>
                  아이콘 URL
                </label>
                <input
                  type="url"
                  id="iconUrl"
                  className={adminInput}
                  value={formData.iconUrl}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      iconUrl: e.target.value,
                    }))
                  }
                />
              </div>

              <div className={adminFormGroup}>
                <label htmlFor="specifications" className={adminLabel}>
                  사양 정보
                </label>
                <textarea
                  id="specifications"
                  className={adminTextarea}
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

              <div className={adminFormGroup}>
                <label htmlFor="priceRanges" className={adminLabel}>
                  가격대 정보 (한 줄에 하나씩)
                </label>
                <textarea
                  id="priceRanges"
                  className={adminTextarea}
                  value={formData.priceRanges?.join("\n") || ""}
                  onChange={(e) =>
                    updateArrayField("priceRanges", e.target.value)
                  }
                  rows={4}
                  placeholder="기본 요금: 100,000원&#10;추가 시간당: 20,000원&#10;야간 할증: 30%"
                />
              </div>

              <div className={adminFormGroup}>
                <label htmlFor="sortOrder" className={adminLabel}>
                  정렬 순서
                </label>
                <input
                  type="number"
                  id="sortOrder"
                  className={adminInput}
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

              <div className={adminFormGroup}>
                <label className={adminLabel}>
                  <input
                    type="checkbox"
                    className={adminCheckbox}
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

              {error && <div className={adminError}>{error}</div>}
              {success && <div className={adminSuccess}>{success}</div>}

              <div className={adminButtonGroup}>
                <button
                  type="submit"
                  className={`${adminButton} ${adminButtonPrimary}`}
                >
                  {editingVehicleType ? "수정" : "생성"}
                </button>
                <button
                  type="button"
                  className={`${adminButton} ${adminButtonSecondary}`}
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
