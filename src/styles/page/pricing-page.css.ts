import { style, keyframes } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

// 애니메이션 정의
const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
})

const slideInRight = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(50px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
})

const pulse = keyframes({
  "0%, 100%": {
    transform: "scale(1)",
  },
  "50%": {
    transform: "scale(1.05)",
  },
})

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
})

// 컨테이너 및 레이아웃
export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `0 ${vars.space.lg}`,
  minHeight: "100vh",
  background: "#ffffff",
})

export const heroSection = style({
  textAlign: "center",
  padding: `${vars.space.xl} 0`,
  marginBottom: vars.space.lg,
  background: "#ffffff",
  borderRadius: "24px",
  margin: `${vars.space.lg} ${vars.space.md}`,
  border: "1px solid #f1f5f9",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.lg} 0`,
      marginBottom: vars.space.md,
      margin: `${vars.space.md}`,
      borderRadius: "20px",
    },
  },
})

export const heroContent = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  animation: `${fadeInUp} 0.8s ease-out`,
  boxSizing: "border-box",
})

export const mainTitle = style({
  fontSize: "3.5rem",
  fontWeight: "800",
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.secondary} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: vars.space.lg,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
      marginBottom: vars.space.md,
    },
  },
})

export const mainSubtitle = style({
  fontSize: "1.25rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      marginBottom: vars.space.lg,
    },
  },
})

export const discountBanner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.md,
  background: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, ${vars.colors.primaryLight} 100%)`,
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderRadius: vars.radii.xl,
  border: `2px solid ${vars.colors.primary}`,
  animation: `${pulse} 3s ease-in-out infinite`,
  maxWidth: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.sm,
      padding: `${vars.space.md} ${vars.space.lg}`,
      textAlign: "center",
      maxWidth: "100%",
    },
    "screen and (max-width: 480px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      borderRadius: vars.radii.lg,
    },
  },
})

export const discountIcon = style({
  fontSize: "2rem",
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

export const discountText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.xs,
  minWidth: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      alignItems: "center",
      textAlign: "center",
    },
  },
})

export const discountText_strong = style({
  fontSize: "1.125rem",
  fontWeight: "700",
  color: vars.colors.primary,
})

export const discountText_span = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
})

// 섹션 스타일
export const sectionWrapper = style({
  marginBottom: vars.space.xxl,
  animation: `${fadeInUp} 0.6s ease-out`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.lg,
    },
  },
})

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: vars.space.lg,
    },
  },
})

export const sectionTitle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.md,
  fontSize: "2rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.5rem",
      gap: vars.space.sm,
    },
  },
})

export const stepNumber = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  color: "white",
  fontSize: "1.25rem",
  fontWeight: "700",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "32px",
      height: "32px",
      fontSize: "1rem",
    },
  },
})

export const sectionDescription = style({
  fontSize: "1rem",
  color: vars.colors.textLight,
})

// 장비 선택기
export const equipmentSelector = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  marginBottom: vars.space.lg,
  padding: `0 ${vars.space.md}`,
  maxWidth: "100%",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.sm,
      padding: `0 ${vars.space.sm}`,
    },
  },
})

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "2px solid #e2e8f0",
  background: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  fontSize: "1.25rem",
  color: vars.colors.primary,
  transition: "all 0.3s ease",
  zIndex: 10,
  flexShrink: 0,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)",
    borderColor: vars.colors.primary,
    backgroundColor: "#fafafa",
  },
  ":active": {
    transform: "translateY(0)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      width: "40px",
      height: "40px",
      fontSize: "1rem",
    },
  },
})

export const equipmentScrollContainer = style({
  flex: 1,
  overflow: "hidden",
  borderRadius: vars.radii.lg,
  position: "relative",
  maxWidth: "100%",
})

export const equipmentList = style({
  display: "flex",
  gap: vars.space.lg,
  overflowX: "auto",
  padding: `${vars.space.md} 0`,
  scrollBehavior: "smooth",
  width: "100%",
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.md,
      padding: `${vars.space.sm} 0`,
    },
  },
})

export const equipmentCard = style({
  flexShrink: 0,
  width: "240px",
  background: "white",
  borderRadius: "20px",
  padding: vars.space.lg,
  cursor: "pointer",
  transition: "border-color 0.2s ease",
  border: "2px solid #f1f5f9",
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "200px",
      padding: vars.space.md,
      borderRadius: "16px",
    },
    "screen and (max-width: 480px)": {
      width: "180px",
    },
  },
})

export const equipmentCardActive = style({
  borderColor: vars.colors.primary,
  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(59, 130, 246, 0.05) 100%)`,
})

export const equipmentImageWrapper = style({
  width: "100%",
  height: "140px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: vars.space.md,
  backgroundColor: "#f8fafc",
  border: "1px solid #f1f5f9",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "120px",
      marginBottom: vars.space.sm,
      borderRadius: "12px",
    },
  },
})

export const equipmentImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
})

export const equipmentImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  color: vars.colors.textLight,
})

export const equipmentInfo = style({
  textAlign: "center",
})

export const equipmentName = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: vars.space.xs,
  lineHeight: 1.4,
  letterSpacing: "-0.01em",
})

export const equipmentPrice = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: vars.colors.primary,
  letterSpacing: "-0.01em",
})

// 스크롤 인디케이터
export const scrollIndicator = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.sm,
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  background: "#f8fafc",
  borderRadius: "20px",
  border: "1px solid #f1f5f9",
  width: "fit-content",
  margin: `${vars.space.md} auto 0`,
})

export const indicatorDot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#cbd5e1",
  transition: "all 0.3s ease",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#94a3b8",
    transform: "scale(1.1)",
  },
})

export const indicatorDotActive = style({
  backgroundColor: vars.colors.primary,
  transform: "scale(1.3)",
  boxShadow: `0 0 0 2px rgba(59, 130, 246, 0.2)`,
})

// 시간 선택기
export const timeSelector = style({
  maxWidth: "640px",
  margin: "0 auto",
  background: "white",
  padding: `${vars.space.xl} ${vars.space.xxl}`,
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
  border: "1px solid #f1f5f9",
  position: "relative",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.lg} ${vars.space.xl}`,
      margin: `0 ${vars.space.md}`,
      borderRadius: "20px",
    },
  },
})

export const timeDisplay = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.lg,
})

export const timeLabel = style({
  fontSize: "1rem",
  color: vars.colors.text,
  fontWeight: "500",
})

export const timeValue = style({
  fontSize: "2rem",
  fontWeight: "800",
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  letterSpacing: "-0.02em",
})

export const timeSlider = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
  padding: `${vars.space.lg} 0`,
})

export const slider = style({
  width: "100%",
  height: "8px",
  borderRadius: "4px",
  background: `linear-gradient(to right, ${vars.colors.primary} 0%, ${vars.colors.primary} var(--value, 0%), #E5E7EB var(--value, 0%), #E5E7EB 100%)`,
  outline: "none",
  appearance: "none",
  transition: "all 0.2s ease",
  cursor: "pointer",
  selectors: {
    "&::-webkit-slider-track": {
      height: "8px",
      borderRadius: "4px",
      background: "transparent",
      border: "none",
    },
    "&::-webkit-slider-thumb": {
      appearance: "none",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: "white",
      cursor: "pointer",
      border: `3px solid ${vars.colors.primary}`,
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      marginTop: "0px",
    },
    "&::-webkit-slider-thumb:hover": {
      transform: "scale(1.1)",
      boxShadow: `0 4px 12px rgba(59, 130, 246, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12)`,
    },
    "&::-webkit-slider-thumb:active": {
      transform: "scale(1.05)",
      boxShadow: `0 3px 8px rgba(59, 130, 246, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)`,
    },
    "&::-moz-range-track": {
      height: "8px",
      borderRadius: "4px",
      background: "#E5E7EB",
      border: "none",
    },
    "&::-moz-range-progress": {
      height: "8px",
      borderRadius: "4px",
      background: vars.colors.primary,
      border: "none",
    },
    "&::-moz-range-thumb": {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: "white",
      cursor: "pointer",
      border: `3px solid ${vars.colors.primary}`,
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.12)",
    },
  },
})

export const sliderLabels = style({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "0.875rem",
  color: vars.colors.textLight,
})

// 결과 섹션
export const resultSection = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: vars.space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.lg,
    },
  },
})

export const priceCard = style({
  background: "white",
  borderRadius: vars.radii.xl,
  padding: vars.space.xl,
  boxShadow: vars.shadows.lg,
  border: `1px solid ${vars.colors.border}`,
  animation: `${slideInRight} 0.6s ease-out`,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: vars.space.lg,
    },
  },
})

export const priceHeader = style({
  marginBottom: vars.space.lg,
})

export const priceTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  textAlign: "center",
})

export const priceComparison = style({
  display: "flex",
  justifyContent: "space-between",
  gap: vars.space.lg,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
})

export const originalPrice = style({
  textAlign: "center",
  padding: vars.space.lg,
  borderRadius: vars.radii.lg,
  backgroundColor: vars.colors.gray[50],
  border: `1px solid ${vars.colors.gray[200]}`,
})

export const originalPriceLabel = style({
  display: "block",
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  marginBottom: vars.space.xs,
})

export const originalPriceValue = style({
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: vars.colors.text,
  textDecoration: "line-through",
})

export const discountPrice = style({
  textAlign: "center",
  padding: vars.space.lg,
  borderRadius: vars.radii.lg,
  background: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, ${vars.colors.primaryLight} 100%)`,
  border: `2px solid ${vars.colors.primary}`,
  position: "relative",
})

export const discountPriceLabel = style({
  display: "block",
  fontSize: "0.875rem",
  color: vars.colors.primary,
  fontWeight: "600",
  marginBottom: vars.space.xs,
})

export const discountPriceValue = style({
  display: "block",
  fontSize: "2rem",
  fontWeight: "800",
  color: vars.colors.primary,
})

export const savings = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: "600",
  color: vars.colors.secondary,
  marginTop: vars.space.xs,
})

export const priceBreakdown = style({
  marginBottom: vars.space.lg,
  padding: vars.space.lg,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.radii.lg,
})

export const breakdownItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.sm} 0`,
  borderBottom: `1px solid ${vars.colors.gray[200]}`,
  fontSize: "0.875rem",
  ":last-child": {
    borderBottom: "none",
  },
})

export const priceNote = style({
  display: "flex",
  gap: vars.space.md,
  padding: vars.space.lg,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.radii.lg,
  marginBottom: vars.space.lg,
})

export const noteIcon = style({
  fontSize: "1.25rem",
})

export const noteText = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  lineHeight: 1.5,
})

export const ctaSection = style({
  textAlign: "center",
})

export const ctaButton = style({
  width: "100%",
  padding: `${vars.space.lg} ${vars.space.xl}`,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  color: "white",
  border: "none",
  borderRadius: vars.radii.lg,
  fontSize: "1.125rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  marginBottom: vars.space.md,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.lg,
  },
})

export const ctaSubtext = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  margin: 0,
})

// 장비 상세 정보 카드
export const equipmentDetailCard = style({
  background: "white",
  borderRadius: vars.radii.xl,
  padding: vars.space.xl,
  boxShadow: vars.shadows.md,
  border: `1px solid ${vars.colors.border}`,
})

export const detailTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  textAlign: "center",
})

export const detailContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const detailImageWrapper = style({
  width: "100%",
  height: "200px",
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  backgroundColor: vars.colors.gray[100],
})

export const detailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const detailImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: vars.colors.textLight,
})

export const detailInfo = style({
  textAlign: "center",
})

export const detailName = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: vars.space.md,
})

export const detailDescription = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.lg,
})

export const detailSpecs = style({
  textAlign: "left",
  padding: vars.space.lg,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.radii.lg,
})

// 로딩 상태
export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  gap: vars.space.lg,
})

export const spinner = style({
  width: "40px",
  height: "40px",
  border: `4px solid ${vars.colors.gray[200]}`,
  borderTop: `4px solid ${vars.colors.primary}`,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
})
