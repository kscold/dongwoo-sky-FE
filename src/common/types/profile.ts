/** 관리자 프로필 정보 */
export interface AdminProfile {
  imageUrl: string
  name: string
  phoneNumber: string
  email: string
}

export interface Profile {
  _id: string
  name: string
  role: string
  introduction: string
  imageUrl: string
  career: string[]
  skills: string[]
  isPublished: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateProfileDto extends Omit<Profile, '_id' | 'createdAt' | 'updatedAt'> { }

export interface UpdateProfileDto extends Partial<CreateProfileDto> { }
