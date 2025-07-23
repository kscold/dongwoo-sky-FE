import { ContentConfig, ContentType } from '../../types/content/content.types'

export const CONTENT_CONFIGS: Record<ContentType, ContentConfig> = {
  'customer-review': {
    type: 'customer-review',
    title: '고객 리뷰',
    subtitle: '저희 서비스를 이용하신 고객님들의 생생한 후기를 만나보세요',
    emptyStateTitle: '등록된 고객 리뷰가 없습니다',
    emptyStateMessage: '첫 번째 고객 리뷰를 기다리고 있습니다.',
    itemsPerPage: 10,
    mobileItemsPerPage: 5
  },
  'work-showcase': {
    type: 'work-showcase',
    title: '작업 사례',
    subtitle: '저희가 완성한 다양한 프로젝트들을 확인해보세요',
    emptyStateTitle: '등록된 작업 사례가 없습니다',
    emptyStateMessage: '새로운 작업 사례를 준비 중입니다.',
    itemsPerPage: 9,
    mobileItemsPerPage: 6
  },
  'notice': {
    type: 'notice',
    title: '공지사항',
    subtitle: '중요한 소식과 업데이트를 확인하세요',
    emptyStateTitle: '등록된 공지사항이 없습니다',
    emptyStateMessage: '새로운 공지사항을 기다리고 있습니다.',
    itemsPerPage: 15,
    mobileItemsPerPage: 10
  }
}

export const getContentConfig = (type: ContentType): ContentConfig => {
  return CONTENT_CONFIGS[type]
}