import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  contactApi,
  ContactSettings,
  UpdateContactSettingsDto,
  ContactInquiryListResponse,
} from "../../api/contact";

// 연락처 설정 가져오기
export const useContactSettings = () => {
  return useQuery({
    queryKey: ["contact-settings"],
    queryFn: contactApi.getContactSettings,
  });
};

// 연락처 설정 업데이트 (관리자용)
export const useUpdateContactSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contactApi.updateContactSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact-settings"] });
    },
  });
};

// 문의 목록 가져오기 (관리자용)
export const useContactInquiries = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ["contact-inquiries", page, limit],
    queryFn: () => contactApi.getContactInquiries(page, limit),
  });
};

// 문의 상태 업데이트 (관리자용)
export const useUpdateInquiryStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
      adminNote,
      respondedBy,
    }: {
      id: string;
      status: string;
      adminNote?: string;
      respondedBy?: string;
    }) => contactApi.updateInquiryStatus(id, status, adminNote, respondedBy),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact-inquiries"] });
    },
  });
};

// 문의 생성 (일반 사용자용)
export const useCreateContactInquiry = () => {
  return useMutation({
    mutationFn: contactApi.createContactInquiry,
  });
};
