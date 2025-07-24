import { NoticeProps } from '../../interfaces/content/content.interface'
import { PaginationResponse, ApiResponse, Priority } from '../content/content.types'

export interface NoticeRequest {
  title: string
  content: string
  summary?: string
  author?: string
  priority?: Priority
  pinned?: boolean
  category?: string
  imageUrls?: string[]
  isActive?: boolean
  isModal?: boolean
}

export interface NoticeUpdateRequest extends Partial<NoticeRequest> {
  _id: string
}

export interface NoticeResponse extends NoticeProps {
  updatedAt: Date
  isModal?: boolean // For modal notices
}

export type NoticeListResponse = PaginationResponse<NoticeResponse>

export type NoticeApiResponse = ApiResponse<NoticeResponse>

export type NoticeListApiResponse = ApiResponse<NoticeListResponse>