import { apiClient } from "./client";

export interface PricingServiceConfig {
  enabled: boolean;
  title: string;
  description: string;
  pricingInquiryTypes: string[];
  equipmentPricing: EquipmentPricing[];
  baseCalculationRules: CalculationRule[];
  disclaimerText: string;
}

export interface EquipmentPricing {
  equipmentId: string;
  equipmentName: string;
  basePrice: number;
  hourlyRate: number;
  baseHours: number;
  minHours: number;
  maxHours: number;
  workingTimeRanges: string[];
  priceRanges: string[];
  calculationNotes: string;
}

export interface CalculationRule {
  name: string;
  description: string;
  multiplier: number;
  conditions: string[];
}

export interface ContactSettings {
  _id: string;
  pageTitle: string;
  pageSubtitle: string;
  pageDescription: string;
  contactSectionTitle: string;
  contactSectionDescription: string;
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  businessFax?: string;
  operatingHours: string;
  businessDays: string[];
  kakaoTalkId?: string;
  naverTalkId?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  formTitle: string;
  formDescription: string;
  inquiryTypes: string[];
  submitButtonText: string;
  successMessage: string;
  errorMessage: string;
  privacyNotes: string[];
  emergencyContactTitle: string;
  emergencyContactDescription: string;
  emergencyPhone: string;
  emergencyHours?: string;
  mapTitle?: string;
  mapDescription?: string;
  latitude?: number;
  longitude?: number;
  mapApiKey?: string;
  // Discord 웹훅 설정
  discordWebhookUrl: string;
  discordEnabled: boolean;
  discordMessageTitle: string;
  discordEmbedColor: string;
  // 요금 서비스 설정
  pricingService: PricingServiceConfig;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateContactSettingsDto {
  pageTitle?: string;
  pageSubtitle?: string;
  pageDescription?: string;
  contactSectionTitle?: string;
  contactSectionDescription?: string;
  businessName?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessEmail?: string;
  businessFax?: string;
  operatingHours?: string;
  businessDays?: string[];
  kakaoTalkId?: string;
  naverTalkId?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  formTitle?: string;
  formDescription?: string;
  inquiryTypes?: string[];
  submitButtonText?: string;
  successMessage?: string;
  errorMessage?: string;
  privacyNotes?: string[];
  emergencyContactTitle?: string;
  emergencyContactDescription?: string;
  emergencyPhone?: string;
  emergencyHours?: string;
  mapTitle?: string;
  mapDescription?: string;
  latitude?: number;
  longitude?: number;
  mapApiKey?: string;
  // Discord 웹훅 설정
  discordWebhookUrl?: string;
  discordEnabled?: boolean;
  discordMessageTitle?: string;
  discordEmbedColor?: string;
  // 요금 서비스 설정
  pricingService?: PricingServiceConfig;
  isActive?: boolean;
}

export interface ContactInquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  subject: string;
  message: string;
  isUrgent: boolean;
  status: string;
  ipAddress?: string;
  userAgent?: string;
  adminNote?: string;
  respondedBy?: string;
  respondedAt?: Date;
  // 요금 문의 관련 필드
  pricingInquiry?: PricingInquiryData;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingInquiryData {
  equipmentIds: string[];
  workLocation: string;
  workingHours: number;
  workingDays: number;
  workStartDate?: Date;
  workEndDate?: Date;
  specialRequirements?: string;
  siteConditions?: string;
  accessRequirements?: string;
  calculatedEstimate?: PricingEstimate;
}

export interface PricingEstimate {
  totalCost: number;
  breakdown: PricingBreakdown[];
  disclaimers: string[];
  validUntil: Date;
}

export interface PricingBreakdown {
  equipmentId: string;
  equipmentName: string;
  basePrice: number;
  hourlyRate: number;
  hours: number;
  days: number;
  subtotal: number;
  additionalCharges: AdditionalCharge[];
}

export interface AdditionalCharge {
  name: string;
  description: string;
  amount: number;
  type: 'fixed' | 'percentage';
}

export interface ContactInquiryListResponse {
  data: ContactInquiry[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const contactApi = {
  // 연락처 설정 가져오기
  getContactSettings: async (): Promise<ContactSettings> => {
    const response = await apiClient.get("/service/contact/settings");
    return response.data;
  },

  // 연락처 설정 업데이트 (관리자용)
  updateContactSettings: async (
    settings: UpdateContactSettingsDto
  ): Promise<ContactSettings> => {
    const response = await apiClient.put("/admin/contact/settings", settings);
    return response.data;
  },

  // 문의 목록 가져오기 (관리자용)
  getContactInquiries: async (
    page: number = 1,
    limit: number = 10
  ): Promise<ContactInquiryListResponse> => {
    const response = await apiClient.get(
      `/admin/contact/inquiries?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  // 문의 상태 업데이트 (관리자용)
  updateInquiryStatus: async (
    id: string,
    status: string,
    adminNote?: string,
    respondedBy?: string
  ): Promise<ContactInquiry> => {
    const response = await apiClient.patch(`/admin/contact/${id}/status`, {
      status,
      adminNote,
      respondedBy,
    });
    return response.data;
  },

  // 문의 생성 (일반 사용자용)
  createContactInquiry: async (inquiry: {
    name: string;
    email: string;
    phone: string;
    company?: string;
    inquiryType: string;
    subject: string;
    message: string;
    isUrgent: boolean;
    pricingInquiry?: PricingInquiryData;
  }): Promise<ContactInquiry> => {
    const response = await apiClient.post("/service/contact/inquiry", inquiry);
    return response.data;
  },

  // 견적 계산 (내부 API용)
  calculatePricingEstimate: async (pricingData: PricingInquiryData): Promise<PricingEstimate> => {
    const response = await apiClient.post("/admin/pricing/calculate", pricingData);
    return response.data;
  },
};
