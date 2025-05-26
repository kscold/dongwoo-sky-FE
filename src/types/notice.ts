// 공지사항 인터페이스
export interface Notice {
  _id: string
  title: string
  content: string
  isPublished: boolean
  isModal: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
  attachments?: Array<{
    url: string
    key: string
    name: string
  }>
}

// 공지사항 생성 타입
export interface CreateNoticeDto {
  title: string
  content: string
  isPublished?: boolean
  isModal?: boolean
  attachments?: Array<{
    url: string
    key: string
    name: string
  }>
}

// 공지사항 수정 타입
export interface UpdateNoticeDto {
  title?: string
  content?: string
  isPublished?: boolean
  isModal?: boolean
  attachments?: Array<{
    url: string
    key: string
    name: string
  }>
}

// 파일 업로드 응답 타입
export interface FileUploadResponse {
  url: string
  key: string
  name: string
}
