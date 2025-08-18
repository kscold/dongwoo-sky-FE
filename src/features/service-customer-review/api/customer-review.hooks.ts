import { useQuery } from "@tanstack/react-query"
import { serviceCustomerReviewApi } from "./customer-review.api"

export const usePublishedReviews = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ["service-customer-reviews", page, limit],
    queryFn: () => serviceCustomerReviewApi.getPublishedReviews(page, limit),
  })
}

export const useCustomerReview = (id: string) => {
  return useQuery({
    queryKey: ["service-customer-review", id],
    queryFn: () => serviceCustomerReviewApi.getReviewById(id),
    enabled: !!id,
  })
}

export const useCustomerReviewStats = () => {
  return useQuery({
    queryKey: ["service-customer-review-stats"],
    queryFn: async () => {
      // 간단한 통계 데이터 반환
      const data = await serviceCustomerReviewApi.getPublishedReviews(1, 1000)
      const totalReviews = data.totalItems
      const averageRating = data.data.reduce((sum, review) => sum + (review.rating || 0), 0) / data.data.length || 0
      
      return {
        totalReviews,
        averageRating: Math.round(averageRating * 10) / 10,
        publishedReviews: data.data.filter(review => review.isPublished ?? review.isActive).length,
        verifiedReviews: data.data.filter(review => review.isVerified ?? true).length,
      }
    },
  })
}