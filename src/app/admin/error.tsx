"use client"

import ErrorComponent from "../../common/components/error/ErrorComponent"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function AdminError({ error, reset }: ErrorProps) {
  return (
    <ErrorComponent
      error={error}
      reset={reset}
      title="관리자 페이지 오류"
      icon="🔧"
      type="admin"
      homeLink="/admin/dashboard"
    />
  )
}
