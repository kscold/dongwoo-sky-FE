"use client"

import React, { useState } from "react"

import ContentListPage from "../../../common/components/content/ContentListPage"
import { useWorkShowcases } from "../../../common/hooks/useWorkShowcase"
import { workShowcaseListConfig } from "../../../common/configs/work-showcase-config"
import type { WorkShowcase } from "../../../types/work-showcase"
import "../../../styles/content/content-list.css"

const WorkShowcasesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const limit = isMobile ? 5 : 10

  const {
    data: workShowcasesData,
    isLoading,
    error,
  } = useWorkShowcases(currentPage, limit)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const workShowcases = workShowcasesData?.data || []
  const totalPages = workShowcasesData?.totalPages || 1

  return (
    <ContentListPage<WorkShowcase>
      config={workShowcaseListConfig}
      type="work-showcase"
      data={workShowcases}
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default WorkShowcasesPage
