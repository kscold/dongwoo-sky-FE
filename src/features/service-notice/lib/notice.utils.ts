export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export const formatViewCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export const getCategoryLabel = (category?: string): string => {
  const categoryLabels: Record<string, string> = {
    announcement: "공지사항",
    maintenance: "점검안내",
    event: "이벤트",
    update: "업데이트",
    general: "일반",
  }
  return category ? categoryLabels[category] || category : "일반"
}

export const isNewNotice = (createdAt: string): boolean => {
  const created = new Date(createdAt)
  const now = new Date()
  const diffInDays = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)
  return diffInDays <= 7 // 7일 이내는 새 공지사항
}

export const sortNoticesByImportance = (notices: any[]): any[] => {
  return [...notices].sort((a, b) => {
    // 중요 공지사항을 먼저 정렬
    if (a.isImportant && !b.isImportant) return -1
    if (!a.isImportant && b.isImportant) return 1
    
    // 같은 중요도면 날짜순으로 정렬 (최신순)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}