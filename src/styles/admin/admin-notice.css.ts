import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const container = style({
  padding: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: vars.colors.text,
  margin: 0,
})

export const createButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const noticeList = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
  border: `1px solid ${vars.colors.border}`,
})

export const noticeItem = style({
  padding: "24px",
  borderBottom: `1px solid ${vars.colors.border}`,
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
  ":last-child": {
    borderBottom: "none",
  },
})

export const noticeHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "12px",
})

export const noticeTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "8px",
  lineHeight: 1.4,
})

export const noticeContent = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: "16px",
})

export const noticeMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "12px",
  color: vars.colors.textLight,
})

export const noticeDate = style({
  fontWeight: "500",
})

export const noticeStatus = style({
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "500",
})

export const publishedStatus = style([
  noticeStatus,
  {
    backgroundColor: vars.colors.primaryLight,
    color: vars.colors.primary,
  },
])

export const draftStatus = style([
  noticeStatus,
  {
    backgroundColor: vars.colors.accent,
    color: vars.colors.textLight,
  },
])

export const noticeActions = style({
  display: "flex",
  gap: "8px",
  marginTop: "16px",
})

export const editButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.primary,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
  },
})

export const deleteButton = style({
  padding: vars.space.xs,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.danger,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.danger}`,
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: vars.colors.danger,
    color: vars.colors.white,
  },
})

export const emptyState = style({
  textAlign: "center",
  padding: "64px 32px",
  color: vars.colors.textLight,
})

export const emptyStateIcon = style({
  fontSize: "48px",
  marginBottom: "16px",
  opacity: 0.5,
})

export const emptyStateText = style({
  fontSize: "18px",
  fontWeight: "500",
  marginBottom: "8px",
})

export const emptyStateSubtext = style({
  fontSize: "14px",
  opacity: 0.7,
})

export const loading = style({
  textAlign: "center",
  padding: "64px",
  color: vars.colors.textLight,
  fontSize: "16px",
})

export const error = style({
  textAlign: "center",
  padding: "64px",
  color: vars.colors.danger,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: "8px",
  border: `1px solid ${vars.colors.border}`,
})

// Form styles
export const form = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
})

export const formGroup = style({
  marginBottom: "16px",
})

export const label = style({
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: vars.colors.text,
  marginBottom: "6px",
})

export const input = style({
  width: "100%",
  padding: "12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  fontSize: "14px",
  boxSizing: "border-box",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const textarea = style([
  input,
  {
    minHeight: "120px",
    resize: "vertical",
  },
])

export const checkbox = style({
  marginRight: "8px",
})

export const buttonGroup = style({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
  marginTop: "24px",
})

export const saveButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const cancelButton = style({
  backgroundColor: vars.colors.textLight,
  color: "white",
  padding: "12px 24px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.text,
  },
})

// 빌드 오류 해결을 위한 누락된 스타일들 추가
export const backButton = style({
  color: vars.colors.primary,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  marginBottom: vars.space.lg,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.primary}`,
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
  },
})

export const formRow = style({
  display: "flex",
  gap: vars.space.md,
  marginBottom: vars.space.lg,

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.sm,
    },
  },
})

export const checkboxGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const checkboxLabel = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.text,
  cursor: "pointer",
})

export const attachmentList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  marginTop: vars.space.sm,
})

export const attachmentItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.space.sm,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
})

export const attachmentName = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  fontWeight: vars.fontWeights.medium,
})

export const removeButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.danger,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.danger}`,
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.danger,
    color: vars.colors.white,
  },
})

export const fileInput = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const helpText = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
  marginTop: vars.space.xs,
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "flex-end",
  marginTop: vars.space.xl,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.colors.border}`,
})

export const submitButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    transform: "none",
  },
})

// 테이블 관련 스타일들
export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.sm,
})

export const tableHeader = style({
  backgroundColor: vars.colors.backgroundLight,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
})

export const tableCell = style({
  padding: vars.space.md,
  textAlign: "left",
  borderBottom: `1px solid ${vars.colors.border}`,
  verticalAlign: "top",
})

export const link = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontWeight: vars.fontWeights.medium,

  ":hover": {
    textDecoration: "underline",
  },
})

export const modalActions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "flex-end",
  marginTop: vars.space.lg,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.colors.border}`,
})

export const skeleton = style({
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
  animation: "pulse 1.5s ease-in-out infinite",
})

export const actionButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  borderRadius: vars.radii.md,
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const statusContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space.sm,
})

export const publishedBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  backgroundColor: vars.colors.primaryLight,
  color: vars.colors.primary,
})

export const unpublishedBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  backgroundColor: vars.colors.gray[100],
  color: vars.colors.textLight,
})

export const toggle = style({
  position: "relative",
  display: "inline-block",
  width: "40px",
  height: "20px",
})

export const toggleInput = style({
  opacity: 0,
  width: 0,
  height: 0,
})

export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: vars.colors.gray[300],
  transition: "0.4s",
  borderRadius: "20px",

  "::before": {
    position: "absolute",
    content: '""',
    height: "16px",
    width: "16px",
    left: "2px",
    bottom: "2px",
    backgroundColor: vars.colors.white,
    transition: "0.4s",
    borderRadius: "50%",
  },
})

export const sliderChecked = style({
  backgroundColor: vars.colors.primary,

  "::before": {
    transform: "translateX(20px)",
  },
})

export const actionButtons = style({
  display: "flex",
  gap: vars.space.xs,
  alignItems: "center",
})
