import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

// 모달 애니메이션
const fadeInAnimation = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const slideInUpAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
})

// 모달 오버레이
export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  animation: `${fadeInAnimation} 0.2s ease-out`,
  padding: vars.space.lg,
})

// 모달 컨텐츠
export const modalContent = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  maxWidth: "500px",
  width: "100%",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  animation: `${slideInUpAnimation} 0.3s ease-out`,
  overflow: "hidden",

  "@media": {
    "(max-width: 640px)": {
      maxWidth: "calc(100vw - 32px)",
      margin: vars.space.md,
      borderRadius: vars.radii.md,
    },
  },
})

// 모달 헤더
export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.space.lg,
  borderBottom: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.white,
})

export const modalTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  margin: 0,
})

export const closeButton = style({
  background: "transparent",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  color: vars.colors.textLight,
  padding: vars.space.xs,
  borderRadius: vars.radii.sm,
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
    color: vars.colors.textStrong,
  },
})

// 폼
export const form = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
})

// 모달 바디
export const modalBody = style({
  padding: vars.space.lg,
  overflow: "auto",
  flex: 1,
  backgroundColor: vars.colors.white,
})

// 모달 푸터
export const modalFooter = style({
  padding: vars.space.lg,
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.md,
  backgroundColor: vars.colors.backgroundLight,
  borderTop: `1px solid ${vars.colors.border}`,
})

export const cancelButton = style({
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
    borderColor: vars.colors.textLight,
  },
})

export const saveButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})
