export interface AttachmentProps {
  name: string
  url: string
  key: string
}

export interface FileUploadRequest {
  file: File
  type?: 'image' | 'document' | 'video'
}

export interface FileUploadResponse extends AttachmentProps {
  size?: number
  contentType?: string
  uploadedAt?: Date
}

export type MultipleFileUploadResponse = FileUploadResponse[]