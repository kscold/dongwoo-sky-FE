"use client"

import React from "react"
import ProtectedRoute from "../../../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../../../common/components/ui/PageSkeleton"
import { CustomerReviewEditForm, useCustomerReviewEdit } from "../../../../../features/admin-customer-review-edit"
import * as styles from "../../../../../styles/admin/admin-form.css"

interface EditCustomerReviewPageProps {
  params: Promise<{
    id: string
  }>
}

function EditCustomerReviewContent({ id }: { id: string }) {
  const {
    review,
    isLoading,
    error,
    formData,
    setFormData,
    updateMutation,
    handleSubmit,
    handleCancel
  } = useCustomerReviewEdit(id)

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error || !review) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          리뷰를 불러오는데 실패했습니다.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>고객 리뷰 수정</h1>
        <p className={styles.subtitle}>고객 리뷰 내용을 수정합니다.</p>
      </div>

      <CustomerReviewEditForm
        formData={formData}
        isPending={updateMutation.isPending}
        onFormChange={setFormData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default function EditCustomerReviewPage({
  params,
}: EditCustomerReviewPageProps) {
  const [resolvedParams, setResolvedParams] = React.useState<{
    id: string
  } | null>(null)

  React.useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  if (!resolvedParams) {
    return <PageSkeleton variant="default" />
  }

  return (
    <ProtectedRoute>
      <EditCustomerReviewContent id={resolvedParams.id} />
    </ProtectedRoute>
  )
}