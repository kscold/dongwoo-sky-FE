// 작업자 자랑거리 타입
export interface WorkShowcase {
  _id?: string;
  title: string;
  content: string;
  imageUrls: string[];
  authorName: string;
  authorRole?: string;
  projectLocation?: string;
  equipmentUsed?: string;
  isActive: boolean;
  viewCount: number;
  likeCount: number;
  publishedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// 페이지네이션 응답 타입
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  totalPages: number;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 생성/수정 DTO 타입
export interface CreateWorkShowcaseDto {
  title: string;
  content: string;
  imageUrls?: string[];
  authorName: string;
  authorRole?: string;
  projectLocation?: string;
  equipmentUsed?: string;
  isActive?: boolean;
}

export type UpdateWorkShowcaseDto = Partial<CreateWorkShowcaseDto>;

// 이미지 업로드 응답 타입
export interface ImageUploadResponse {
  imageUrls: string[];
}
