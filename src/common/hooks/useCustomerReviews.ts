import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { CustomerReview } from '../types/customer-review'

interface CustomerReviewsResponse {
  data: CustomerReview[]
  total: number
  page: number
  limit: number
  totalPages: number
}

const fetchCustomerReviews = async (page: number = 1, limit: number = 10): Promise<CustomerReviewsResponse> => {
  const response = await fetch(`/api/customer-reviews?page=${page}&limit=${limit}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch customer reviews')
  }
  
  return response.json()
}

const deleteCustomerReview = async (id: string): Promise<void> => {
  const response = await fetch(`/api/customer-reviews/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Failed to delete customer review')
  }
}

const toggleCustomerReviewPublished = async ({ id, isPublished }: { id: string; isPublished: boolean }): Promise<CustomerReview> => {
  const response = await fetch(`/api/customer-reviews/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isPublished }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to toggle customer review published status')
  }
  
  return response.json()
}

export const useCustomerReviews = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ['customer-reviews', page, limit],
    queryFn: () => fetchCustomerReviews(page, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}

export const useCustomerReview = (id: string) => {
  return useQuery({
    queryKey: ['customer-review', id],
    queryFn: async () => {
      const response = await fetch(`/api/customer-reviews/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch customer review')
      }
      return response.json()
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })
}

export const useDeleteCustomerReview = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteCustomerReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customer-reviews'] })
    },
  })
}

export const useToggleCustomerReviewPublished = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: toggleCustomerReviewPublished,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customer-reviews'] })
    },
  })
}