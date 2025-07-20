import { apiClient } from "./client";

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
  createdAt: Date;
  updatedAt: Date;
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
  }): Promise<ContactInquiry> => {
    const response = await apiClient.post("/service/contact/inquiry", inquiry);
    return response.data;
  },
};
