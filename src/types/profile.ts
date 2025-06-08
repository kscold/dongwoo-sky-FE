export interface Profile {
  _id: string
  name: string
  title: string
  introduction: string
  careers: string[]
  skills: string[]
  profileImage?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export type CreateProfileDto = {
  name: string
  title: string
  introduction: string
  careers: string[]
  skills: string[]
  profileImage?: string
  isActive?: boolean
  sortOrder?: number
}

export type UpdateProfileDto = Partial<CreateProfileDto>
