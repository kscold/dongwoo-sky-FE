import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { WorkShowcase } from '../types/work-showcase'

interface WorkShowcasesResponse {
  data: WorkShowcase[]
  total: number
  page: number
  limit: number
  totalPages: number
}

const fetchWorkShowcases = async (page: number = 1, limit: number = 10): Promise<WorkShowcasesResponse> => {
  const response = await fetch(`/api/work-showcases?page=${page}&limit=${limit}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch work showcases')
  }
  
  return response.json()
}

const deleteWorkShowcase = async (id: string): Promise<void> => {
  const response = await fetch(`/api/work-showcases/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Failed to delete work showcase')
  }
}

const toggleWorkShowcaseActive = async ({ id, isActive }: { id: string; isActive: boolean }): Promise<WorkShowcase> => {
  const response = await fetch(`/api/work-showcases/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isActive }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to toggle work showcase active status')
  }
  
  return response.json()
}

export const useWorkShowcases = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ['work-showcases', page, limit],
    queryFn: () => fetchWorkShowcases(page, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}

export const useWorkShowcase = (id: string) => {
  return useQuery({
    queryKey: ['work-showcase', id],
    queryFn: async () => {
      const response = await fetch(`/api/work-showcases/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch work showcase')
      }
      return response.json()
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })
}

export const useDeleteWorkShowcase = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteWorkShowcase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['work-showcases'] })
    },
  })
}

export const useToggleWorkShowcaseActive = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: toggleWorkShowcaseActive,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['work-showcases'] })
    },
  })
}