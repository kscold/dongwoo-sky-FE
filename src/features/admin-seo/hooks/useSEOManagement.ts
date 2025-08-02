import { useState } from "react"
import { useAllSEO, useCreateSEO, useUpdateSEO, useDeleteSEO } from "../../../common/hooks/useSEO"
import { PageSEO, CreateSEODto } from "../../../types/seo"

export const useSEOManagement = () => {
  const { data: seoData, isLoading, error, refetch } = useAllSEO()
  const seoList = Array.isArray(seoData) ? seoData : []
  const createMutation = useCreateSEO()
  const updateMutation = useUpdateSEO()
  const deleteMutation = useDeleteSEO()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<PageSEO | null>(null)
  const [formData, setFormData] = useState<Partial<CreateSEODto>>({
    page: '',
    path: '',
    title: '',
    description: '',
    keywords: [],
    ogTitle: '',
    ogDescription: '',
    robots: 'index, follow'
  })

  const handleOpenModal = (item?: PageSEO) => {
    if (item) {
      setEditingItem(item)
      setFormData({
        page: item.page,
        path: item.path,
        title: item.metadata.title,
        description: item.metadata.description,
        keywords: item.metadata.keywords || [],
        ogTitle: item.metadata.ogTitle || '',
        ogDescription: item.metadata.ogDescription || '',
        robots: item.metadata.robots || 'index, follow'
      })
    } else {
      setEditingItem(null)
      setFormData({
        page: '',
        path: '',
        title: '',
        description: '',
        keywords: [],
        ogTitle: '',
        ogDescription: '',
        robots: 'index, follow'
      })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingItem(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingItem) {
        await updateMutation.mutateAsync({
          id: editingItem.metadata.id!,
          data: formData
        })
      } else {
        await createMutation.mutateAsync(formData as CreateSEODto)
      }
      handleCloseModal()
      refetch()
    } catch (error) {
      console.error('SEO 저장 실패:', error)
      alert('저장에 실패했습니다.')
    }
  }

  const handleDelete = async (item: PageSEO) => {
    if (!item.metadata.id) return
    
    if (window.confirm(`'${item.page}' 페이지의 SEO 설정을 삭제하시겠습니까?`)) {
      try {
        await deleteMutation.mutateAsync(item.metadata.id)
        refetch()
      } catch (error) {
        console.error('SEO 삭제 실패:', error)
        alert('삭제에 실패했습니다.')
      }
    }
  }

  return {
    seoList,
    isLoading,
    error,
    isModalOpen,
    editingItem,
    formData,
    setFormData,
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    handleDelete
  }
}