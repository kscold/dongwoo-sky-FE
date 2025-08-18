import type { Notice } from "@/types/notice"

export const getNoticeStats = (notices: Notice[]) => {
  const total = notices.length
  const published = notices.filter((n) => n.isActive || !!n.publishedAt).length
  const modal = notices.filter((n) => n.isModal).length
  const today = new Date().toISOString().split("T")[0]
  const todayCount = notices.filter(
    (n) => n.createdAt && n.createdAt.toString().split("T")[0] === today
  ).length

  return { total, published, modal, todayCount }
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}