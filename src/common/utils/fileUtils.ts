import { AttachmentProps, NoticeAttachment } from "../types/api/attachment.types"

/**
 * 파일명 인코딩 문제를 해결하고 깔끔한 표시명을 생성
 */
export const processAttachment = (attachment: AttachmentProps): NoticeAttachment => {
  // 파일명 디코딩 시도
  let displayName = attachment.name
  
  try {
    // URL 디코딩 시도
    displayName = decodeURIComponent(attachment.name)
  } catch (error) {
    // 디코딩 실패시 원본 사용
    displayName = attachment.name
  }
  
  // 파일 확장자 추출
  const fileExtension = displayName.split('.').pop()?.toLowerCase()
  
  // 이미지 파일 여부 확인
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp']
  const isImage = fileExtension ? imageExtensions.includes(fileExtension) : false
  
  // 파일명이 너무 길면 축약
  if (displayName.length > 50) {
    const nameWithoutExt = displayName.substring(0, displayName.lastIndexOf('.'))
    const extension = displayName.substring(displayName.lastIndexOf('.'))
    displayName = nameWithoutExt.substring(0, 30) + '...' + extension
  }
  
  return {
    ...attachment,
    displayName,
    fileExtension,
    isImage,
    originalName: attachment.originalName || attachment.name
  }
}

/**
 * 파일 크기를 읽기 쉬운 형태로 변환
 */
export const formatFileSize = (bytes?: number): string => {
  if (!bytes) return ''
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * 파일 타입에 따른 아이콘 반환
 */
export const getFileIcon = (fileExtension?: string): string => {
  if (!fileExtension) return '📄'
  
  const iconMap: Record<string, string> = {
    // 이미지
    jpg: '🖼️', jpeg: '🖼️', png: '🖼️', gif: '🖼️', webp: '🖼️', svg: '🖼️', bmp: '🖼️',
    // 문서
    pdf: '📄', doc: '📝', docx: '📝', txt: '📝', rtf: '📝',
    // 스프레드시트
    xls: '📊', xlsx: '📊', csv: '📊',
    // 프레젠테이션
    ppt: '📊', pptx: '📊',
    // 압축파일
    zip: '🗂️', rar: '🗂️', '7z': '🗂️', tar: '🗂️', gz: '🗂️',
    // 비디오
    mp4: '🎥', avi: '🎥', mov: '🎥', wmv: '🎥', flv: '🎥', webm: '🎥',
    // 오디오
    mp3: '🎵', wav: '🎵', flac: '🎵', aac: '🎵', ogg: '🎵'
  }
  
  return iconMap[fileExtension.toLowerCase()] || '📄'
}

/**
 * 파일 다운로드
 */
export const downloadFile = (url: string, filename: string): void => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}