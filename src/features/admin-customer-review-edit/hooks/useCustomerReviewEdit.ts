import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  useAdminCustomerReview,
  useUpdateCustomerReview,
} from "../../../common/hooks/useCustomerReview"

export const useCustomerReviewEdit = (id: string) => {
  const router = useRouter()
  const { data: review, isLoading, error } = useAdminCustomerReview(id)
  const updateMutation = useUpdateCustomerReview()

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    customerName: "",
    rating: 5,
    isActive: true,
  })

  useEffect(() => {
    if (review) {
      setFormData({
        title: review.title || "",
        content: review.content || "",
        customerName: review.customerName || "",
        rating: review.rating || 5,
        isActive: review.isActive !== false,
      })
    }
  }, [review])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await updateMutation.mutateAsync({
        id,
        data: formData,
      })

      alert("리뷰가 성공적으로 수정되었습니다.")
      router.push("/admin/customer-review")
    } catch (error) {
      console.error("리뷰 수정 실패:", error)
      alert("리뷰 수정에 실패했습니다.")
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return {
    review,
    isLoading,
    error,
    formData,
    setFormData,
    updateMutation,
    handleSubmit,
    handleCancel
  }
}