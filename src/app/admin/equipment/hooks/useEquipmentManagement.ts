import { useState } from "react"
import { DragEndEvent } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { 
  useEquipments,
  useUpdateEquipmentOrder,
  useDeleteEquipment,
} from "../../../../common/hooks/useEquipment"
import { Equipment } from "../../../../types/equipment"

export const useEquipmentManagement = () => {
  const { data: equipments = [], isLoading, error, refetch } = useEquipments()
  const updateOrderMutation = useUpdateEquipmentOrder()
  const deleteMutation = useDeleteEquipment()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEquipment, setEditingEquipment] = useState<Equipment | null>(null)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const activeIndex = equipments.findIndex(
        (item, index) => (item.id || `equipment-${index}`) === active.id
      )
      const overIndex = equipments.findIndex(
        (item, index) => (item.id || `equipment-${index}`) === over!.id
      )

      if (activeIndex === -1 || overIndex === -1) return

      const newOrder = arrayMove(equipments, activeIndex, overIndex)
      const newOrderIds = newOrder
        .filter((item) => item.id)
        .map((item) => item.id)

      if (newOrderIds.length > 0) {
        updateOrderMutation.mutate(newOrderIds)
      }
    }
  }

  const openModal = (equipment: Equipment | null = null) => {
    setEditingEquipment(equipment)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setEditingEquipment(null)
    setIsModalOpen(false)
    refetch()
  }

  const handleDelete = (id: string) => {
    if (!id) {
      alert("삭제할 수 없는 장비입니다.")
      return
    }

    if (window.confirm("정말로 이 장비를 삭제하시겠습니까?")) {
      deleteMutation.mutate(id, {
        onSuccess: () => {
          refetch()
        },
      })
    }
  }

  return {
    equipments,
    isLoading,
    error,
    isModalOpen,
    editingEquipment,
    handleDragEnd,
    openModal,
    closeModal,
    handleDelete,
  }
}