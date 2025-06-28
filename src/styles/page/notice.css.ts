import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const container = style({
  padding: vars.space.xl,
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const title = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  margin: 0,
})

export const actions = style({
  display: "flex",
  gap: vars.space.md,
})

export const createButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const backButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const tableContainer = style({
  overflowX: "auto",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: vars.space.md,
  fontSize: vars.fontSizes.sm,
})

export const tableCell = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
})

export const tableHeader = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
  backgroundColor: vars.colors.backgroundLight,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
})

export const tableRow = style({
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const titleCell = style({
  fontWeight: vars.fontWeights.medium,
  maxWidth: "300px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

export const statusPublished = style({
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const statusDraft = style({
  backgroundColor: vars.colors.textLight,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const modalActive = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const modalInactive = style({
  backgroundColor: vars.colors.textLight,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const editButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.accent,
  color: vars.colors.primary,
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  textDecoration: "none",
  marginRight: vars.space.sm,
  display: "inline-block",
})

export const deleteButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.gray[50],
  color: vars.colors.danger,
  border: `1px solid ${vars.colors.danger}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const loading = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})

export const error = style({
  padding: vars.space.xl,
  backgroundColor: vars.colors.gray[50],
  color: vars.colors.danger,
  borderRadius: vars.radii.md,
  textAlign: "center",
})

export const retryButton = style({
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const emptyState = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})

// 공지사항 목록 스타일
export const noticeList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const noticeItem = style({
  marginBottom: vars.space.lg,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
})

export const noticeLink = style({
  display: "block",
  padding: vars.space.lg,
  textDecoration: "none",
  color: "inherit",
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
  lineHeight: "1.4",
})

export const noticeInfo = style({
  marginBottom: vars.space.sm,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeContent = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  lineHeight: "1.6",
  marginBottom: vars.space.sm,
})

export const attachmentInfo = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.primary,
  backgroundColor: vars.colors.accent,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  display: "inline-block",
})

// 공지사항 상세 페이지 스타일
export const detailContainer = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: vars.space.lg,
})

export const detailHeader = style({
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const detailTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  lineHeight: "1.3",
})

export const detailMeta = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const detailDate = style({
  color: vars.colors.textLight,
})

export const detailBackButton = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: vars.fontSizes.sm,
  ":hover": {
    textDecoration: "underline",
  },
})

export const detailContent = style({
  fontSize: vars.fontSizes.md,
  lineHeight: "1.8",
  color: vars.colors.text,
  marginBottom: vars.space.xl,
})

export const detailAttachments = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.lg,
})

export const attachmentsTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
})

export const attachmentsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const attachmentItem = style({
  marginBottom: vars.space.md,
  padding: vars.space.md,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
})

export const imageAttachment = style({
  textAlign: "center",
})

export const attachmentImage = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: vars.radii.md,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
})

export const attachmentLink = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: vars.fontSizes.sm,
  ":hover": {
    textDecoration: "underline",
  },
})

// Notice 상세 페이지 추가 스타일
export const noticeHeader = style({
  marginBottom: vars.space.lg,
})

export const noticeDetail = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.border}`,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
})

export const detailInfo = style({
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

// 공지사항 폼 스타일
export const form = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.border}`,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
})

export const formGroup = style({
  marginBottom: vars.space.lg,
})

export const formRow = style({
  display: "flex",
  gap: vars.space.lg,
  marginBottom: vars.space.lg,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.md,
    },
  },
})

export const label = style({
  display: "block",
  marginBottom: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.textStrong,
})

export const input = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px ${vars.colors.primary}33`,
  },
})

export const textarea = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  resize: "vertical",
  minHeight: "200px",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px ${vars.colors.primary}33`,
  },
})

export const checkboxGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const checkbox = style({
  width: "16px",
  height: "16px",
  cursor: "pointer",
})

export const checkboxLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  cursor: "pointer",
})

export const fileInput = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  backgroundColor: vars.colors.white,
})

export const helpText = style({
  display: "block",
  marginTop: vars.space.xs,
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textWeak,
})

export const attachmentList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const attachmentItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space.sm,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.sm,
  border: `1px solid ${vars.colors.border}`,
})

export const attachmentName = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
})

export const removeButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.error,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.errorDark,
  },
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  marginTop: vars.space.xl,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
})

export const submitButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
  ":disabled": {
    backgroundColor: vars.colors.border,
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const error = style({
  padding: vars.space.md,
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  border: "1px solid #fecaca",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  marginBottom: vars.space.lg,
})

export const loading = style({
  textAlign: "center",
  padding: vars.space.xl,
  color: vars.colors.textWeak,
  fontSize: vars.fontSizes.md,
})
