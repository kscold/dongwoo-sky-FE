export interface AttachmentProps {
  name: string
  url: string
  key: string
  originalName?: string
  size?: number
  contentType?: string
}

export interface FileUploadRequest {
  file: File
  type?: 'image' | 'document' | 'video'
}

export interface FileUploadResponse extends AttachmentProps {
  size?: number
  contentType?: string
  uploadedAt?: Date
  originalName?: string
}

export type MultipleFileUploadResponse = FileUploadResponse[]

export interface NoticeAttachment extends AttachmentProps {
  displayName: string
  fileExtension?: string
  isImage: boolean
}