import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { adminApi } from "../../../../api/admin";
import {
  ServiceGuide,
  UpdateServiceGuideDto,
} from "../../../../types/service-guide";
import {
  uploadProfileImage,
  deleteProfileImage,
} from "../../../../api/service-guide";

const queryKey = ["adminServiceGuide"];

export const useAdminServiceGuide = () => {
  return useQuery<ServiceGuide, Error>({
    queryKey,
    queryFn: adminApi.getServiceGuide,
  });
};

export const useUpdateAdminServiceGuide = () => {
  const queryClient = useQueryClient();
  return useMutation<ServiceGuide, Error, UpdateServiceGuideDto>({
    mutationFn: adminApi.updateServiceGuide,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
      alert("서비스 안내 정보가 성공적으로 업데이트되었습니다.");
    },
    onError: (error) => {
      alert(`업데이트 중 오류가 발생했습니다: ${error.message}`);
    },
  });
};

export const useUploadProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadProfileImage(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export const useDeleteProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (imageUrl: string) => deleteProfileImage(imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
