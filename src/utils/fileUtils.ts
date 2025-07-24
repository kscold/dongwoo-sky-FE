/**
 * 파일 관련 유틸리티 함수들
 */

// 이미지 파일 확장자 목록
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];

// 문서 파일 확장자 목록
const DOCUMENT_EXTENSIONS = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt', '.hwp'];

/**
 * 파일이 이미지인지 확인
 * @param fileName 파일명 또는 URL
 * @returns 이미지 여부
 */
export function isImageFile(fileName: string): boolean {
  if (!fileName) return false;
  
  const extension = getFileExtension(fileName);
  return IMAGE_EXTENSIONS.includes(extension);
}

/**
 * 파일이 문서인지 확인
 * @param fileName 파일명 또는 URL
 * @returns 문서 여부
 */
export function isDocumentFile(fileName: string): boolean {
  if (!fileName) return false;
  
  const extension = getFileExtension(fileName);
  return DOCUMENT_EXTENSIONS.includes(extension);
}

/**
 * 파일 확장자 추출
 * @param fileName 파일명 또는 URL
 * @returns 확장자 (점 포함, 소문자)
 */
export function getFileExtension(fileName: string): string {
  if (!fileName) return '';
  
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  
  return fileName.substring(lastDotIndex).toLowerCase();
}

/**
 * 파일 크기를 읽기 쉬운 형태로 변환
 * @param bytes 바이트 크기
 * @returns 포맷된 크기 문자열
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * 파일 타입 아이콘 반환
 * @param fileName 파일명
 * @returns 파일 타입에 맞는 이모지 아이콘
 */
export function getFileIcon(fileName: string): string {
  const extension = getFileExtension(fileName);
  
  if (IMAGE_EXTENSIONS.includes(extension)) {
    return '🖼️';
  }
  
  switch (extension) {
    case '.pdf':
      return '📄';
    case '.doc':
    case '.docx':
      return '📝';
    case '.xls':
    case '.xlsx':
      return '📊';
    case '.txt':
      return '📄';
    case '.hwp':
      return '📄';
    default:
      return '📎';
  }
}

/**
 * 파일명에서 이름 부분만 추출 (확장자 제외)
 * @param fileName 파일명
 * @returns 확장자를 제외한 파일명
 */
export function getFileNameWithoutExtension(fileName: string): string {
  if (!fileName) return '';
  
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) return fileName;
  
  return fileName.substring(0, lastDotIndex);
}