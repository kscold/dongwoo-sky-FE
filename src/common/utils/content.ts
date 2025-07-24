// HTML 태그 제거 유틸리티
export const stripHtml = (html: string): string => {
  if (typeof window !== "undefined") {
    const div = document.createElement("div")
    div.innerHTML = html
    return div.textContent || div.innerText || ""
  }
  return html.replace(/<[^>]*>/g, "")
}

// 날짜 포맷 유틸리티
export const formatDate = (dateString: string | Date | null | undefined): string => {
  if (!dateString) return "날짜 정보 없음"
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}