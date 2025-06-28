"use client"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function NoticeError({ error, reset }: ErrorProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "1rem", color: "#dc2626" }}>
        공지사항을 불러오는데 실패했습니다
      </h2>
      <p style={{ marginBottom: "2rem", color: "#6b7280" }}>
        {error.message || "알 수 없는 오류가 발생했습니다."}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        다시 시도
      </button>
    </div>
  )
}
