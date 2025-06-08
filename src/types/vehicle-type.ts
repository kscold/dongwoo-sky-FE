export interface VehicleType {
  _id: string
  name: string
  type: "ladder" | "sky"
  iconUrl?: string
  description?: string
  isActive: boolean
  sortOrder: number
  priceRanges: string[]
  specifications?: string
  createdAt: string
  updatedAt: string
}

export type CreateVehicleTypeDto = {
  name: string
  type: "ladder" | "sky"
  iconUrl?: string
  description?: string
  isActive?: boolean
  sortOrder?: number
  priceRanges?: string[]
  specifications?: string
}

export type UpdateVehicleTypeDto = Partial<CreateVehicleTypeDto>
