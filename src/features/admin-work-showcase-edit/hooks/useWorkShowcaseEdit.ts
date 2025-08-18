import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdminWorkShowcase, useUpdateWorkShowcase } from "../../../common/hooks/useWorkShowcase"

export const useWorkShowcaseEdit = (id: string) => {
  const router = useRouter()
  const { data: showcase, isLoading, error } = useAdminWorkShowcase(id)
  const updateMutation = useUpdateWorkShowcase()

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    projectDuration: "",
    clientName: "",
    description: "",
    tags: [] as string[],
    isActive: true,
  })

  const [tagsInput, setTagsInput] = useState("")

  useEffect(() => {
    if (showcase) {
      setFormData({
        title: showcase.title || "",
        content: showcase.content || "",
        category: showcase.category || "",
        projectDuration: showcase.projectDuration || "",
        clientName: showcase.clientName || "",
        description: showcase.description || "",
        tags: showcase.tags || [],
        isActive: showcase.isActive !== false,
      })
      setTagsInput((showcase.tags || []).join(", "))
    }
  }, [showcase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const tags = tagsInput
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)

    try {
      await updateMutation.mutateAsync({
        id,
        data: { ...formData, tags }
      })
      
      alert("작업 자랑거리가 성공적으로 수정되었습니다.")
      router.push("/admin/work-showcase")
    } catch (error) {
      console.error("작업 자랑거리 수정 실패:", error)
      alert("작업 자랑거리 수정에 실패했습니다.")
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return {
    showcase,
    isLoading,
    error,
    formData,
    setFormData,
    tagsInput,
    setTagsInput,
    updateMutation,
    handleSubmit,
    handleCancel
  }
}