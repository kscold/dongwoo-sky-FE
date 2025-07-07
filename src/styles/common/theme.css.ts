import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
  colors: {
    primary: "#0E4DA4", // 더 깊고 풍부한 블루
    primaryDark: "#083472", // 더욱 깊은 블루
    primaryLight: "#EBF5FF", // 더 세련된 배경용 밝은 파란색
    primaryTransparent: "rgba(14, 77, 164, 0.15)", // 포커스 링 등에 사용할 투명도 버전
    secondary: "#00C2B8", // 좀 더 밝고 생동감 있는 틸
    accent: "#F2F6FF", // 더 세련된 밝은 회색 (약간의 블루 톤)
    background: "#FFFFFF",
    backgroundLight: "#FAFBFF", // 약간의 푸른빛이 감도는 배경색
    text: "#18202E", // 더 깊고 세련된 텍스트 색
    textLight: "#4A5568", // 중간 톤의 회색
    textStrong: "#0F172A", // 더 진한 강조 텍스트
    white: "#FFFFFF",
    black: "#000000",
    error: "#E53E3E", // 좀 더 현대적인 에러 색상
    success: "#10B981", // 세련된 성공 색상
    danger: "#DC2626", // 위험 색상 (error와 유사하지만 더 진함)
    border: "#E2E8F0", // 세련된 테두리 색
    borderLight: "#EDF2F7", // 더 밝은 테두리 색
    glass: "rgba(255, 255, 255, 0.8)", // 유리 효과
    glassBorder: "rgba(255, 255, 255, 0.3)", // 유리 테두리 효과
    shadow: "rgba(0, 0, 0, 0.06)", // 부드러운 그림자
    gray: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    gradientFrom: "#E0F2FE", // 더 세련된 그라데이션 시작색
    gradientTo: "#BFDBFE", // 더 세련된 그라데이션 끝색
    gradientUtil: "linear-gradient(135deg, #E0F2FE, #BFDBFE)", // 방향과 색상 개선
    gradientTextFrom: "#0284C7", // 세련된 텍스트 그라데이션 시작
    gradientTextTo: "#0EA5E9", // 세련된 텍스트 그라데이션 끝
    overlayDark: "rgba(0, 0, 0, 0.7)", // 오버레이용 어두운 색
    overlayLight: "rgba(255, 255, 255, 0.92)", // 오버레이용 밝은 색
    accentTertiary: "#F59E0B", // 강조용 악센트 색상 (중장비 테마와 어울리는 주황색)
    dangerDark: "#dc2626",
    disabled: "#d1d5db",
  },
  fonts: {
    heading: "Pretendard, Inter, Noto Sans KR, sans-serif",
    body: "Pretendard, Inter, Noto Sans KR, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
    xxxxl: "2.5rem", // 40px
    xxxxxl: "3rem", // 48px
    xxxxxxl: "3.75rem", // 60px
  },
  fontWeights: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  lineHeights: {
    normal: "1.5",
    relaxed: "1.75", // 좀 더 여유있는 줄간격
    heading: "1.2",
  },
  space: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
    xxxl: "4rem", // 64px
    xxxxl: "5rem", // 80px
  },
  radii: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.8rem", // 약간 더 큰 라운드 코너
    xl: "1.25rem", // 더 둥근 모서리
    xxl: "2rem", // 더 큰 둥근 모서리
    round: "50%",
    full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
    md: "0 4px 20px -2px rgba(0, 0, 0, 0.08)",
    lg: "0 10px 30px -5px rgba(0, 0, 0, 0.07)",
    xl: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
    subtle: "0 2px 15px -5px rgba(0, 0, 0, 0.05)",
    glow: "0 0 20px 0 rgba(14, 77, 164, 0.15)",
    glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
  },
  transitions: {
    fast: "0.15s ease-in-out",
    medium: "0.25s ease-in-out",
    slow: "0.5s ease-in-out",
    bounce: "0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },
  filters: {
    blur: {
      sm: "blur(4px)",
      md: "blur(8px)",
      lg: "blur(16px)",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  zIndices: {
    hide: "-1",
    auto: "auto",
    base: "0",
    docked: "10",
    dropdown: "1000",
    sticky: "1100",
    banner: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
})
