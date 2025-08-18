export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export const getRatingText = (rating: number) => {
  if (rating >= 5) return "매우 만족"
  if (rating >= 4) return "만족"
  if (rating >= 3) return "보통"
  if (rating >= 2) return "불만족"
  return "매우 불만족"
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}