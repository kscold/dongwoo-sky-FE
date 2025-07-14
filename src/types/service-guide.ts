import { Equipment } from "./equipment"
import { Profile } from "./profile"

/**
 * @description 서비스 절차
 */
export interface ProcessStep {
  title: string
  description: string
  icon?: string
}

/**
 * @description 작업 가능 범위
 */
export interface ScopeOfWork {
  text: string
  icon?: string
}

/**
 * @description 사용자에게 보여지는 서비스 가이드 정보
 */
export interface ServiceGuide {
  _id: string
  key: string
  heroTitle: string
  heroSubtitle: string
  profileSectionTitle: string
  scopeOfWorkSectionTitle: string
  equipmentSectionTitle: string
  processSectionTitle: string
  processSteps: ProcessStep[]
  scopeOfWork: ScopeOfWork[]
  profile: Profile
  createdAt: string
  updatedAt: string
}

/**
 * @description /service/service-guide API 응답 데이터 타입
 */
export interface ServiceGuideData {
  serviceGuide: ServiceGuide
  equipments: Equipment[]
}

/**
 * @description 관리자 페이지에서 사용하는 서비스 가이드 정보 (업데이트용)
 */
export interface AdminServiceGuide extends ServiceGuide {}

/**
 * @description 서비스 가이드 업데이트 DTO
 */
export type UpdateServiceGuideDto = Partial<ServiceGuide>
