// 임시로 빌드 오류를 피하기 위해 주석 처리
export const useHeroSettings = (enabled: boolean = true) => {
  return {
    data: null,
    isLoading: false,
    error: null,
  }
}

export const useUpdateHeroSettings = () => {
  return {
    mutate: () => {},
    isPending: false,
  }
}

export function useUploadHeroImage() {
  return {
    mutate: () => {},
    isPending: false,
  }
}

export function useDeleteHeroImage() {
  return {
    mutate: () => {},
    isPending: false,
  }
}

export function useUpdateHeroImagesOrder() {
  return {
    mutate: () => {},
    isPending: false,
  }
}

export function useToggleHeroImageStatus() {
  return {
    mutate: () => {},
    isPending: false,
  }
}

export const useAdminHeroSettings = () => {
  return {
    data: null,
    isLoading: false,
    error: null,
  }
}
