import { 
  getPublishedCustomerReviews,
  getCustomerReviewById,
  markReviewHelpful
} from "@/api/customer-review"
import type { CustomerReviewListResponse, CustomerReview } from "../types/customer-review"

export const serviceCustomerReviewApi = {
  getPublishedReviews: async (page: number = 1, limit: number = 10): Promise<CustomerReviewListResponse> => {
    const data = await getPublishedCustomerReviews(page, limit)
    return {
      data: data.data.map((item: any) => ({
        ...item,
        reviewText: item.content,
        isVerified: true,
        isPublished: item.isActive,
      })),
      totalPages: data.totalPages,
      currentPage: data.currentPage,
      totalItems: data.totalItems,
      limit: data.limit,
    }
  },

  getReviewById: async (id: string): Promise<CustomerReview> => {
    const data = await getCustomerReviewById(id)
    return {
      ...data,
      reviewText: data.content,
      isVerified: true,
      isPublished: data.isActive,
    }
  },

  markHelpful: async (id: string) => {
    return markReviewHelpful(id)
  },
}