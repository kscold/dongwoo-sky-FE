"use client"

import React from "react"
import ProtectedRoute from "../../../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../../../common/components/ui/PageSkeleton"
import { WorkShowcaseEditForm, useWorkShowcaseEdit } from "../../../../../features/admin-work-showcase-edit"
import * as styles from "../../../../../styles/admin/admin-form.css"

interface EditWorkShowcasePageProps {
  params: Promise<{
    id: string
  }>
}

function EditWorkShowcaseContent({ id }: { id: string }) {
  const {
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
  } = useWorkShowcaseEdit(id)

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error || !showcase) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          작업 자랑거리를 불러오는데 실패했습니다.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>작업 자랑거리 수정</h1>
        <p className={styles.subtitle}>작업 자랑거리 내용을 수정합니다.</p>
      </div>

      <WorkShowcaseEditForm
        formData={formData}
        tagsInput={tagsInput}
        isPending={updateMutation.isPending}
        onFormChange={setFormData}
        onTagsChange={setTagsInput}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default function EditWorkShowcasePage({ params }: EditWorkShowcasePageProps) {
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null)
  
  React.useEffect(() => {
    params.then(setResolvedParams)
  }, [params])
  
  if (!resolvedParams) {
    return <PageSkeleton variant="default" />
  }
  
  return (
    <ProtectedRoute>
      <EditWorkShowcaseContent id={resolvedParams.id} />
    </ProtectedRoute>
  )
}