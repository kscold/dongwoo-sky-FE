"use client"

import { useEffect, useState } from "react"
import { useNotice } from "../../../../common/hooks/useNotices"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import { NoticeDetail, NoticeDetailError } from "../../../../features/service-notice"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function NoticeDetailPage({ params }: PageProps) {
  const [noticeId, setNoticeId] = useState<string | null>(null)

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setNoticeId(resolvedParams.id)
    }
    loadParams()
  }, [params])

  const { data: notice, isLoading, error } = useNotice(noticeId || "")

  if (isLoading || !noticeId) {
    return <PageSkeleton variant="notice" />
  }

  if (error || !notice) {
    return <NoticeDetailError error={error} />
  }

  return <NoticeDetail notice={notice} />
}
