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
    transform: "scale(1.02)",
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
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
    },
  },
})

// 전체 페이지 배경
export const pageWrapper = style({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  paddingBottom: vars.space.xxxxl,
})

export const heroSection = style({
  textAlign: "center",
  marginTop: vars.space.md,
  marginBottom: vars.space.xxl,
  padding: `${vars.space.xl} ${vars.space.xl}`,
  background: `
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  borderRadius: "32px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.sm,
      marginBottom: vars.space.xl,
      padding: `${vars.space.lg} ${vars.space.lg}`,
      borderRadius: "24px",
    },
  },
})

export const heroContent = style({
  maxWidth: "900px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  animation: `${fadeInUp} 0.8s ease-out`,
  boxSizing: "border-box",
  position: "relative",
  zIndex: 1,
})

export const mainTitle = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: "800",
  marginBottom: vars.space.lg,
  color: vars.colors.primary,
  position: "relative",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxxl,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const mainSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  marginBottom: vars.space.lg,
  maxWidth: "600px",
  margin: `0 auto ${vars.space.lg} auto`,
  lineHeight: 1.6,
  fontWeight: "500",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

export const discountBanner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.md,
  background: vars.colors.white,
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderRadius: "24px",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  maxWidth: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.sm,
      padding: `${vars.space.md} ${vars.space.lg}`,
      textAlign: "center",
      maxWidth: "100%",
    },
    "(max-width: 480px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      borderRadius: "20px",
    },
  },
})

export const discountIcon = style({
  fontSize: "2.5rem",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
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
    "(max-width: 768px)": {
      alignItems: "center",
      textAlign: "center",
    },
  },
})

export const discountText_strong = style({
  fontSize: "1.25rem",
  fontWeight: "800",
  color: vars.colors.text,
})

export const discountText_span = style({
  fontSize: "0.9rem",
  color: vars.colors.textLight,
  fontWeight: "500",
})

// 섹션 스타일
export const sectionWrapper = style({
  marginBottom: vars.space.xxxl,
  animation: `${fadeInUp} 0.6s ease-out`,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxl,
    },
  },
})

export const sectionHeader = style({
  textAlign: "center",
  marginTop: vars.space.lg,
  marginBottom: vars.space.xxl,
  padding: `${vars.space.lg} 0`,
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.md,
      marginBottom: vars.space.xl,
      padding: `${vars.space.md} 0`,
    },
  },
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: "800",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
})

export const sectionDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  fontWeight: "500",
  textAlign: "center",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.sm,
    },
  },
})

// 장비 선택기
export const equipmentSelector = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  marginBottom: vars.space.xxxl,
  padding: `0 ${vars.space.md}`,
  maxWidth: "100%",
  overflow: "hidden",
  "@media": {
    "(max-width: 768px)": {
      gap: vars.space.sm,
      padding: `0 ${vars.space.sm}`,
      marginBottom: vars.space.xxl,
    },
  },
})

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  backgroundColor: vars.colors.white,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  fontSize: "1.375rem",
  color: vars.colors.primary,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 10,
  flexShrink: 0,
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    borderColor: vars.colors.primary,
  },
  "@media": {
    "(max-width: 768px)": {
      width: "48px",
      height: "48px",
      fontSize: "1.25rem",
    },
  },
})

export const equipmentScrollContainer = style({
  flex: 1,
  overflow: "hidden",
  borderRadius: "24px",
  position: "relative",
  maxWidth: "100%",
  "@media": {
    "(max-width: 768px)": {
      borderRadius: "20px",
    },
  },
})

export const equipmentList = style({
  display: "flex",
  gap: vars.space.xl,
  overflowX: "auto",
  padding: `${vars.space.md} 0`,
  scrollBehavior: "smooth",
  width: "100%",
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  "@media": {
    "(max-width: 768px)": {
      gap: vars.space.md,
      padding: `${vars.space.sm} 0`,
    },
  },
})

export const equipmentCard = style({
  flexShrink: 0,
  width: "280px",
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  padding: vars.space.xl,
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  position: "relative",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  "@media": {
    "(max-width: 768px)": {
      width: "calc(100vw - 2rem)",
      maxWidth: "320px",
      padding: vars.space.lg,
      borderRadius: "20px",
    },
    "(max-width: 480px)": {
      width: "calc(100vw - 1rem)",
      maxWidth: "280px",
    },
  },
})

export const equipmentCardActive = style({
  borderColor: vars.colors.primary,
  backgroundColor: vars.colors.white,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  transform: "translateY(-2px)",
})

export const equipmentImageWrapper = style({
  width: "100%",
  height: "160px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  "@media": {
    "(max-width: 768px)": {
      height: "140px",
      marginBottom: vars.space.md,
      borderRadius: "12px",
    },
  },
})

export const equipmentImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
})

export const equipmentImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem",
  color: vars.colors.textLight,
})

export const equipmentInfo = style({
  textAlign: "center",
})

export const equipmentName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.sm,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
})

export const equipmentPrice = style({
  fontSize: "1.125rem",
  fontWeight: "700",
  color: vars.colors.text,
  letterSpacing: "-0.01em",
})

// 스크롤 인디케이터
export const scrollIndicator = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.sm,
  marginTop: vars.space.lg,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  width: "fit-content",
  margin: `${vars.space.lg} auto 0`,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
})

export const indicatorDot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "#cbd5e1",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#94a3b8",
    transform: "scale(1.2)",
  },
})

export const indicatorDotActive = style({
  backgroundColor: vars.colors.primary,
  transform: "scale(1.4)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
})

// 시간 선택기
export const timeSelector = style({
  background: vars.colors.white,
  borderRadius: "24px",
  padding: vars.space.xxl,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  marginBottom: vars.space.xl,
  animation: `${fadeInUp} 0.6s ease-out`,
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.xl,
      borderRadius: "20px",
      marginBottom: vars.space.lg,
      minHeight: "auto",
      height: "auto",
    },
  },
})

export const timeDisplay = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
  padding: `${vars.space.lg} 0`,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.lg,
      padding: `${vars.space.md} 0`,
    },
  },
})

export const timeLabel = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  marginBottom: vars.space.sm,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
})

export const timeValue = style({
  display: "block",
  fontSize: vars.fontSizes.xxl,
  fontWeight: "800",
  color: vars.colors.primary,
  marginBottom: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
})

export const timeSlider = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: `${vars.space.xl} 0`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.lg} 0`,
    },
  },
})

export const slider = style({
  width: "100%",
  height: "20px",
  borderRadius: "10px",
  background: `linear-gradient(to right, ${vars.colors.primary} 0%, ${vars.colors.primary} var(--value), ${vars.colors.gray[200]} var(--value), ${vars.colors.gray[200]} 100%)`,
  outline: "none",
  marginBottom: vars.space.lg,
  cursor: "pointer",
  transition: "all 0.3s ease",
  selectors: {
    "&::-webkit-slider-thumb": {
      appearance: "none",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: vars.colors.white,
      border: `5px solid ${vars.colors.primary}`,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(14, 77, 164, 0.5)",
      transition: "all 0.2s ease",
    },
    "&::-moz-range-thumb": {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: vars.colors.white,
      border: `5px solid ${vars.colors.primary}`,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(14, 77, 164, 0.5)",
      transition: "all 0.2s ease",
    },
    "&:hover::-webkit-slider-thumb": {
      transform: "scale(1.2)",
      boxShadow: "0 15px 40px rgba(14, 77, 164, 0.6)",
    },
    "&:hover::-moz-range-thumb": {
      transform: "scale(1.2)",
      boxShadow: "0 15px 40px rgba(14, 77, 164, 0.6)",
    },
  },
  "@media": {
    "(max-width: 768px)": {
      height: "16px",
      selectors: {
        "&::-webkit-slider-thumb": {
          width: "36px",
          height: "36px",
          border: `4px solid ${vars.colors.primary}`,
        },
        "&::-moz-range-thumb": {
          width: "36px",
          height: "36px",
          border: `4px solid ${vars.colors.primary}`,
        },
      },
    },
  },
})

export const sliderLabels = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  padding: `0 ${vars.space.sm}`,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
})
// 결과 섹션
export const resultSection = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: vars.space.xl,
  alignItems: "stretch",
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.xl,
      marginBottom: vars.space.xxxl,
    },
    "(max-width: 768px)": {
      padding: `0 ${vars.space.sm}`,
      gap: vars.space.lg,
      marginBottom: vars.space.xxl,
    },
  },
})

export const priceCard = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: "24px",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  position: "relative",
  overflow: "hidden",
  animation: `${slideInRight} 0.6s ease-out`,
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  },
  "@media": {
    "(max-width: 1024px)": {
      minHeight: "auto",
      height: "auto",
    },
    "(max-width: 768px)": {
      padding: vars.space.lg,
      borderRadius: "20px",
    },
  },
})

export const priceHeader = style({
  marginBottom: vars.space.xl,
  flexShrink: 0,
})

export const priceTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: "800",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
})

export const priceComparison = style({
  display: "flex",
  justifyContent: "space-between",
  gap: vars.space.xl,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.lg,
    },
  },
})

export const originalPrice = style({
  textAlign: "center",
  padding: vars.space.xl,
  borderRadius: "20px",
  backgroundColor: vars.colors.backgroundLight,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

export const originalPriceLabel = style({
  display: "block",
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  marginBottom: vars.space.sm,
  fontWeight: "600",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const originalPriceValue = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  textDecoration: "line-through",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  minHeight: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.1rem",
      minHeight: "2.2rem",
    },
  },
})

export const discountPrice = style({
  textAlign: "center",
  padding: vars.space.xl,
  borderRadius: "20px",
  backgroundColor: vars.colors.white,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

export const discountPriceLabel = style({
  display: "block",
  fontSize: "0.8rem",
  color: vars.colors.primary,
  fontWeight: "700",
  marginBottom: vars.space.sm,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const discountPriceValue = style({
  fontSize: "1.5rem",
  fontWeight: "900",
  color: vars.colors.text,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  minHeight: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.25rem",
      minHeight: "2.2rem",
    },
  },
})

export const savings = style({
  display: "block",
  fontSize: "0.8rem",
  fontWeight: "700",
  color: "#059669",
  marginTop: vars.space.sm,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const priceBreakdown = style({
  marginBottom: vars.space.xl,
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
})

export const breakdownItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.md} 0`,
  borderBottom: "1px solid rgba(226, 232, 240, 0.6)",
  fontSize: "0.8rem",
  fontWeight: "500",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  ":last-child": {
    borderBottom: "none",
    fontWeight: "700",
  },
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.space.sm,
    },
  },
})

export const priceNote = style({
  display: "flex",
  gap: vars.space.md,
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  marginBottom: vars.space.xl,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  overflow: "hidden",
})

export const noteIcon = style({
  fontSize: "1.5rem",
  color: vars.colors.primary,
  flexShrink: 0,
})

export const noteText = style({
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  fontWeight: "500",
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const ctaSection = style({
  textAlign: "center",
})

export const ctaButton = style({
  width: "100%",
  padding: `${vars.space.lg} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: "white",
  border: "none",
  borderRadius: "16px",
  fontSize: "1.25rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  marginBottom: vars.space.md,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
})

export const ctaSubtext = style({
  fontSize: "0.9rem",
  color: vars.colors.textLight,
  margin: 0,
  fontWeight: "500",
})

// 장비 상세 정보 카드
export const equipmentDetailCard = style({
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  padding: vars.space.xxl,
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
  overflow: "hidden",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  },
  "@media": {
    "(max-width: 1024px)": {
      minHeight: "auto",
      height: "auto",
    },
    "(max-width: 768px)": {
      padding: vars.space.xl,
      borderRadius: "20px",
    },
  },
})
export const detailTitle = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.xl,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  flexShrink: 0,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xl,
  flex: 1,
  overflow: "hidden",
})

export const detailImageWrapper = style({
  width: "100%",
  height: "240px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: vars.colors.backgroundLight,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      height: "200px",
      borderRadius: "12px",
    },
  },
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
  fontSize: "4rem",
  color: vars.colors.textLight,
})

export const detailInfo = style({
  textAlign: "center",
  flex: 1,
  overflow: "hidden",
})

export const detailName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailDescription = style({
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.xl,
  fontWeight: "500",
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const detailSpecs = style({
  textAlign: "left",
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
})

export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  gap: vars.space.xl,
})

export const spinner = style({
  width: "48px",
  height: "48px",
  border: "4px solid rgba(226, 232, 240, 0.3)",
  borderTop: "4px solid vars.colors.primary",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
})
