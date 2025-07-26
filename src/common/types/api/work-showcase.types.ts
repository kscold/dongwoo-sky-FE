import { WorkShowcaseProps } from "../../interfaces/content/content.interface"
import { PaginationResponse, ApiResponse } from "../content/content.types"

export interface WorkShowcaseRequest {
  title: string
  content: string
  category?: string
  projectDuration?: string
  clientName?: string
  description?: string
  tags?: string[]
  imageUrls?: string[]
  beforeImageUrls?: string[]
  afterImageUrls?: string[]
  isActive?: boolean
}

export interface WorkShowcaseUpdateRequest
  extends Partial<WorkShowcaseRequest> {}

export interface WorkShowcaseResponse extends WorkShowcaseProps {
  updatedAt: Date
  authorName?: string // For backward compatibility
  projectLocation?: string // For backward compatibility
  equipmentUsed?: string // For backward compatibility
  likeCount?: number // For backward compatibility
}

export type WorkShowcaseListResponse = PaginationResponse<WorkShowcaseResponse>

export type WorkShowcaseApiResponse = ApiResponse<WorkShowcaseResponse>

export type WorkShowcaseListApiResponse = ApiResponse<WorkShowcaseListResponse>
