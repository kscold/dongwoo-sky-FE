// 임시로 빌드 오류를 피하기 위해 주석 처리
export const usePricingSettingForm = () => {
  return {
    isLoading: false,
    saveStatus: null,
    register: () => ({}),
    handleSubmit: () => ({}),
    errors: {},
    isSubmitting: false,
    infoNotesFields: [],
    removeInfoNote: () => {},
    addInfoNote: () => {},
    onSubmit: () => {},
  }
}
