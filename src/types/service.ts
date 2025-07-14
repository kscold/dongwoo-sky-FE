export interface Service {
  _id: string
  title: string
  description: string
  isActive: boolean
  sortOrder: number
  icon?: string
  createdAt: string
  updatedAt: string
}

export type CreateServiceDto = {
  title: string
  description: string
  isActive?: boolean
  sortOrder?: number
  icon?: string
}

export type UpdateServiceDto = Partial<CreateServiceDto>
