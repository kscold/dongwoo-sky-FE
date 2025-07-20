import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getServiceGuide,
  updateServiceGuide,
  uploadProfileImage,
  deleteProfileImage,
} from "../../api/service-guide";
import { ServiceGuide, UpdateServiceGuideDto } from "../../types/service-guide";

export const useServiceGuide = () => {
  return useQuery({
    queryKey: ["service-guide"],
    queryFn: getServiceGuide,
  });
};

export const useUpdateAdminServiceGuide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateServiceGuideDto) => updateServiceGuide(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-guide"] });
    },
  });
};

export const useUploadProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadProfileImage(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-guide"] });
    },
  });
};

export const useDeleteProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (imageUrl: string) => deleteProfileImage(imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-guide"] });
    },
  });
};
