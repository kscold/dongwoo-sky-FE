export interface Equipment {
  _id?: string
  name: string
  description: string
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
  specifications?: string
  capabilities?: string[]
  priceRange?: string
  maxHeight?: string
  maxWeight?: string
  tonnage?: string
  createdAt?: string
  updatedAt?: string
}

export interface CreateEquipmentDto {
  name: string
  description: string
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
  specifications?: string
  capabilities?: string[]
  priceRange?: string
  maxHeight?: string
  maxWeight?: string
  tonnage?: string
}

export type UpdateEquipmentDto = Partial<CreateEquipmentDto>
