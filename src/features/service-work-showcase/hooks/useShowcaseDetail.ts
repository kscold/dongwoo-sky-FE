import { useWorkShowcase, useLikeWorkShowcase } from "../../../common/hooks/useWorkShowcase"

export const useShowcaseDetail = (id: string) => {
  const { data: showcase, isLoading, error } = useWorkShowcase(id)
  const likeMutation = useLikeWorkShowcase()

  const handleLike = async () => {
    try {
      await likeMutation.mutateAsync(id)
    } catch (error) {
      console.error("좋아요 실패:", error)
    }
  }

  return {
    showcase,
    isLoading,
    error,
    handleLike,
    isLiking: likeMutation.isPending,
  }
}