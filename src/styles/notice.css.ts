import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `${vars.space.xxxl} ${vars.space.lg}`,
})

export const title = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.xl,
  textAlign: "center",
  color: vars.colors.textStrong,
  borderBottom: `2px solid ${vars.colors.accent}`,
  paddingBottom: vars.space.md,
})

export const noticeList = style({
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const noticeItem = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: vars.shadows.lg,
    },
  },
})

export const noticeLink = style({
  display: "block",
  padding: vars.space.xl,
  color: "inherit",
  textDecoration: "none",
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
  marginBottom: vars.space.sm,
})

export const noticeInfo = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.md,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeContent = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
})

export const attachmentInfo = style({
  marginTop: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.accent,
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
})

export const loading = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
})

export const error = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.danger,
})

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
})

export const retryButton = style({
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
    },
  },
})

export const backButton = style({
  display: "inline-block",
  marginBottom: vars.space.lg,
  color: vars.colors.text,
  textDecoration: "none",
  fontSize: vars.fontSizes.md,
  transition: "color 0.3s ease",
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
    },
  },
})

// 상세 페이지 스타일
export const noticeHeader = style({
  marginBottom: vars.space.lg,
})

export const noticeDetail = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  padding: vars.space.xl,
})

export const detailTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  marginBottom: vars.space.md,
})

export const detailInfo = style({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  marginBottom: vars.space.lg,
})

export const detailDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const detailContent = style({
  fontSize: vars.fontSizes.md,
  lineHeight: vars.lineHeights.relaxed,
  color: vars.colors.text,
  "& p": {
    marginBottom: vars.space.md,
  },
})

export const detailAttachments = style({
  marginTop: vars.space.xl,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.colors.border}`,
})

export const attachmentsTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
})

export const attachmentsList = style({
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const attachmentItem = style({
  padding: vars.space.sm,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.sm,
})

export const attachmentLink = style({
  color: vars.colors.accent,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
})

// 폼 관련 스타일
export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const form = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  padding: vars.space.xl,
})

export const formGroup = style({
  marginBottom: vars.space.lg,
})

export const formRow = style({
  display: "flex",
  gap: vars.space.lg,
  marginBottom: vars.space.lg,
})

export const label = style({
  display: "block",
  marginBottom: vars.space.sm,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
})

export const input = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.md,
  transition: "border-color 0.2s",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.colors.primary,
      boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
    },
  },
})

export const textarea = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.md,
  resize: "vertical",
  minHeight: "200px",
  fontFamily: vars.fonts.body,
  transition: "border-color 0.2s",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.colors.primary,
      boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
    },
  },
})

export const checkboxGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const checkbox = style({
  width: "18px",
  height: "18px",
  accentColor: vars.colors.primary,
})

export const checkboxLabel = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  cursor: "pointer",
})

export const fileInput = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.md,
  backgroundColor: vars.colors.backgroundLight,
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.colors.primary,
    },
  },
})

export const helpText = style({
  display: "block",
  marginTop: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  marginTop: vars.space.xl,
  justifyContent: "flex-end",
})

export const submitButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  cursor: "pointer",
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
    },
    "&:disabled": {
      backgroundColor: vars.colors.textLight,
      cursor: "not-allowed",
    },
  },
})

export const cancelButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.md,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.backgroundLight,
    },
  },
})

// 관리자 페이지 스타일
export const actions = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.lg,
})

export const createButton = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  textDecoration: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  cursor: "pointer",
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
    },
  },
})

export const tableContainer = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  overflow: "hidden",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const tableHeader = style({
  padding: vars.space.md,
  backgroundColor: vars.colors.backgroundLight,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
})

export const tableRow = style({
  borderBottom: `1px solid ${vars.colors.border}`,
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.backgroundLight,
    },
  },
})

export const tableCell = style({
  padding: vars.space.md,
  color: vars.colors.text,
})

export const titleCell = style({
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
})

export const statusPublished = style({
  color: vars.colors.success,
  fontWeight: vars.fontWeights.semibold,
})

export const statusDraft = style({
  color: vars.colors.textLight,
})

export const modalActive = style({
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.semibold,
})

export const modalInactive = style({
  color: vars.colors.textLight,
})

export const editButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  marginRight: vars.space.sm,
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
    },
  },
})

export const deleteButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: "#B91C1C",
    },
  },
})

export const empty = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
})
