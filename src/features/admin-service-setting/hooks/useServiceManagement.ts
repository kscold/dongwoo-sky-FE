import { useState, useEffect } from "react"
import { serviceApi } from "../../../api/service"
import { Service, CreateServiceDto, UpdateServiceDto } from "../../../types/service"

export const useServiceManagement = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [formData, setFormData] = useState<CreateServiceDto>({
    title: "",
    description: "",
    isActive: true,
    sortOrder: 0,
    icon: "",
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const data = await serviceApi.getAllAdmin()
      setServices(data)
      setError(null)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "서비스 목록을 불러오는데 실패했습니다."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = () => {
    setEditingService(null)
    setFormData({
      title: "",
      description: "",
      isActive: true,
      sortOrder: services.length,
      icon: "",
    })
    setShowModal(true)
  }

  const handleEdit = (service: Service) => {
    setEditingService(service)
    setFormData({
      title: service.title,
      description: service.description,
      isActive: service.isActive,
      sortOrder: service.sortOrder,
      icon: service.icon || "",
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("정말로 이 서비스를 삭제하시겠습니까?")) {
      try {
        await serviceApi.delete(id)
        await fetchServices()
      } catch (err) {
        alert(err instanceof Error ? err.message : "삭제에 실패했습니다.")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingService) {
        await serviceApi.update(
          editingService._id,
          formData as UpdateServiceDto
        )
      } else {
        await serviceApi.create(formData)
      }
      setShowModal(false)
      await fetchServices()
    } catch (err) {
      alert(err instanceof Error ? err.message : "저장에 실패했습니다.")
    }
  }

  return {
    services,
    loading,
    error,
    showModal,
    editingService,
    formData,
    setFormData,
    setShowModal,
    handleCreate,
    handleEdit,
    handleDelete,
    handleSubmit
  }
}