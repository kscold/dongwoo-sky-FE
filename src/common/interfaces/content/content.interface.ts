export interface BaseContentItemProps {
  _id: string
  title: string
  content: string
  imageUrls?: string[]
  viewCount?: number
  createdAt?: string | Date
  publishedAt?: string | Date
  isActive?: boolean
  attachments?: Array<{
    url: string
    name: string
    key: string
  }>
}

export interface CustomerReviewProps extends BaseContentItemProps {
  rating?: number
  customerName?: string
  customerCompany?: string
  serviceType?: string
  projectLocation?: string
  helpfulCount?: number
}

export interface WorkShowcaseProps extends BaseContentItemProps {
  category?: string
  projectDuration?: string
  clientName?: string
  description?: string
  tags?: string[]
  beforeImageUrls?: string[]
  afterImageUrls?: string[]
}

export interface NoticeProps extends BaseContentItemProps {
  summary?: string
  author?: string
  priority?: 'high' | 'medium' | 'low'
  pinned?: boolean
  category?: string
}

export interface ContentCardProps {
  item: BaseContentItemProps
  type: 'customer-review' | 'work-showcase' | 'notice'
  onItemClick?: (item: BaseContentItemProps) => void
}

export interface ContentListProps {
  items: BaseContentItemProps[]
  type: 'customer-review' | 'work-showcase' | 'notice'
  isLoading?: boolean
  error?: string | null
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface PageHeaderProps {
  title: string
  subtitle: string
  backUrl?: string
  backButtonText?: string
}