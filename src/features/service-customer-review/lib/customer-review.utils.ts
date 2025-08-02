export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatRating = (rating: number): string => {
  return rating.toFixed(1)
}

export const getRatingStars = (rating: number): string => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export const getProjectTypeLabel = (projectType?: string): string => {
  const typeLabels: Record<string, string> = {
    construction: "건설",
    maintenance: "유지보수",
    demolition: "철거",
    landscaping: "조경",
    other: "기타",
  }
  return projectType ? typeLabels[projectType] || projectType : "미분류"
}