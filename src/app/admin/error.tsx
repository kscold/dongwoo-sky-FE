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
      message="관리자 페이지에서 오류가 발생했습니다"
      icon="🔧"
      type="admin"
    />
  )
}
