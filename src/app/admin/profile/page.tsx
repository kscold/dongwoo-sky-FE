"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "../../../common/context/AdminContext"
import { profileApi } from "../../../api/profile"
import {
  Profile,
  CreateProfileDto,
  UpdateProfileDto,
} from "@/common/types/profile"
import * as AdminCommon from "../../../styles/admin/admin-common.css"

export default function AdminProfilePage() {
  const router = useRouter()
  const { isAuthenticated, logout } = useAdmin()

  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null)
  const [formData, setFormData] = useState<CreateProfileDto>({
    name: "",
    title: "",
    introduction: "",
    careers: [],
    skills: [],
    profileImage: "",
    isActive: true,
    sortOrder: 0,
  })

  // 프로필 목록 조회
  const fetchProfiles = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await profileApi.getAllAdmin()
      setProfiles(data)
    } catch (error) {
      console.error("프로필 조회 오류:", error)
      setError("프로필을 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfiles()
    }
  }, [isAuthenticated])

  // 폼 리셋
  const resetForm = () => {
    setFormData({
      name: "",
      title: "",
      introduction: "",
      careers: [],
      skills: [],
      profileImage: "",
      isActive: true,
      sortOrder: 0,
    })
    setEditingProfile(null)
  }

  // 모달 열기
  const openModal = (profile?: Profile) => {
    if (profile) {
      setEditingProfile(profile)
      setFormData({
        name: profile.name,
        title: profile.title,
        introduction: profile.introduction,
        careers: profile.careers,
        skills: profile.skills,
        profileImage: profile.profileImage || "",
        isActive: profile.isActive,
        sortOrder: profile.sortOrder,
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

  // 프로필 저장
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setError(null)
      setSuccess(null)

      if (editingProfile) {
        // 수정
        await profileApi.update(
          editingProfile._id,
          formData as UpdateProfileDto
        )
        setSuccess("프로필이 성공적으로 수정되었습니다.")
      } else {
        // 생성
        await profileApi.create(formData)
        setSuccess("프로필이 성공적으로 생성되었습니다.")
      }

      await fetchProfiles()
      closeModal()
    } catch (error) {
      console.error("프로필 저장 오류:", error)
      setError("프로필 저장에 실패했습니다.")
    }
  }

  // 프로필 삭제
  const handleDelete = async (id: string) => {
    if (!confirm("정말로 이 프로필을 삭제하시겠습니까?")) {
      return
    }

    try {
      setError(null)
      await profileApi.delete(id)
      setSuccess("프로필이 성공적으로 삭제되었습니다.")
      await fetchProfiles()
    } catch (error) {
      console.error("프로필 삭제 오류:", error)
      setError("프로필 삭제에 실패했습니다.")
    }
  }

  // 배열 필드 업데이트 함수
  const updateArrayField = (field: "skills" | "careers", value: string) => {
    const items = value.split("\n").filter((item) => item.trim() !== "")
    setFormData((prev) => ({ ...prev, [field]: items }))
  }

  return (
    <div className={AdminCommon.adminContainer}>
      <div className={AdminCommon.adminHeader}>
        <h1 className={AdminCommon.adminTitle}>프로필 관리</h1>
        <div className={AdminCommon.adminButtonGroup}>
          <button
            className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonPrimary}`}
            onClick={() => openModal()}
          >
            프로필 추가
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
                <th className={AdminCommon.adminTableCell}>직책</th>
                <th className={AdminCommon.adminTableCell}>소개</th>
                <th className={AdminCommon.adminTableCell}>상태</th>
                <th className={AdminCommon.adminTableCell}>정렬순서</th>
                <th className={AdminCommon.adminTableCell}>작업</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile._id} className={AdminCommon.adminTableRow}>
                  <td className={AdminCommon.adminTableCell}>{profile.name}</td>
                  <td className={AdminCommon.adminTableCell}>
                    {profile.title}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {profile.introduction.length > 50
                      ? `${profile.introduction.substring(0, 50)}...`
                      : profile.introduction}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {profile.isActive ? "활성" : "비활성"}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    {profile.sortOrder}
                  </td>
                  <td className={AdminCommon.adminTableCell}>
                    <div className={AdminCommon.adminButtonGroup}>
                      <button
                        className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonSecondary}`}
                        onClick={() => openModal(profile)}
                      >
                        수정
                      </button>
                      <button
                        className={`${AdminCommon.adminButton} ${AdminCommon.adminButtonDanger}`}
                        onClick={() => handleDelete(profile._id)}
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
            <h2>{editingProfile ? "프로필 수정" : "프로필 추가"}</h2>

            <form onSubmit={handleSave} className={AdminCommon.adminForm}>
              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="name" className={AdminCommon.adminLabel}>
                  이름 *
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
                <label htmlFor="title" className={AdminCommon.adminLabel}>
                  직책 *
                </label>
                <input
                  type="text"
                  id="title"
                  className={AdminCommon.adminInput}
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label
                  htmlFor="introduction"
                  className={AdminCommon.adminLabel}
                >
                  소개 *
                </label>
                <textarea
                  id="introduction"
                  className={AdminCommon.adminTextarea}
                  value={formData.introduction}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      introduction: e.target.value,
                    }))
                  }
                  rows={4}
                  required
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label
                  htmlFor="profileImage"
                  className={AdminCommon.adminLabel}
                >
                  프로필 이미지 URL
                </label>
                <input
                  type="url"
                  id="profileImage"
                  className={AdminCommon.adminInput}
                  value={formData.profileImage}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      profileImage: e.target.value,
                    }))
                  }
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="skills" className={AdminCommon.adminLabel}>
                  기술 스택 (한 줄에 하나씩)
                </label>
                <textarea
                  id="skills"
                  className={AdminCommon.adminTextarea}
                  value={formData.skills.join("\n")}
                  onChange={(e) => updateArrayField("skills", e.target.value)}
                  rows={4}
                  placeholder="JavaScript&#10;TypeScript&#10;React&#10;Node.js"
                />
              </div>

              <div className={AdminCommon.adminFormGroup}>
                <label htmlFor="careers" className={AdminCommon.adminLabel}>
                  경력사항 (한 줄에 하나씩)
                </label>
                <textarea
                  id="careers"
                  className={AdminCommon.adminTextarea}
                  value={formData.careers.join("\n")}
                  onChange={(e) => updateArrayField("careers", e.target.value)}
                  rows={4}
                  placeholder="동우스카이 대표 (2020-현재)&#10;프리랜서 개발자 (2018-2020)"
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
                  {editingProfile ? "수정" : "생성"}
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
