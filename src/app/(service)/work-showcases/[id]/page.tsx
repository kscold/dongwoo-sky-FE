"use client"

import React from "react"
import { useParams } from "next/navigation"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import {
  ShowcaseDetail,
  ShowcaseDetailError,
  useShowcaseDetail
} from "../../../../features/service-work-showcase"

const WorkShowcaseDetailPage = () => {
  const params = useParams()
  const id = params.id as string
  const { showcase, isLoading, error, handleLike, isLiking } = useShowcaseDetail(id)

  if (isLoading) {
    return <PageSkeleton variant="work-showcase" />
  }

  if (error || !showcase) {
    return <ShowcaseDetailError />
  }

  return (
    <ShowcaseDetail
      showcase={showcase}
      onLike={handleLike}
      isLiking={isLiking}
    />
  )
}

export default WorkShowcaseDetailPage