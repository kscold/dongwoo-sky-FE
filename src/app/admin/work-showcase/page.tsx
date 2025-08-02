"use client"

import React from "react"
import { useWorkShowcaseManagement } from "@/features/admin-work-showcase/api/work-showcase.hooks"
import { WorkShowcaseHeader } from "@/features/admin-work-showcase/ui/WorkShowcaseHeader"
import { WorkShowcaseTable } from "@/features/admin-work-showcase/ui/WorkShowcaseTable"
import { Pagination } from "@/features/admin-work-showcase/ui/Pagination"
import { LoadingSkeleton } from "@/features/admin-work-showcase/ui/LoadingSkeleton"
import * as styles from "../../../features/admin-work-showcase/ui/work-showcase-page.css"

export default function AdminWorkShowcasePage() {
  const {
    data,
    isLoading,
    currentPage,
    setCurrentPage,
    handleDelete,
    handleToggleActive,
  } = useWorkShowcaseManagement()

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const workShowcases = data?.data || []
  const totalPages = data?.totalPages || 0
  const totalItems = data?.totalItems || 0

  return (
    <div className={styles.container}>
      <WorkShowcaseHeader totalCount={totalItems} />
      
      <WorkShowcaseTable
        items={workShowcases}
        onToggleActive={handleToggleActive}
        onDelete={handleDelete}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}