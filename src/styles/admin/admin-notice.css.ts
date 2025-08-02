import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
  padding: vars.space.xl,
  maxWidth: "1400px",
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.lg,
    },
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: vars.space.xl,
  padding: vars.space.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.md,
      alignItems: "stretch",
    },
  },
})

export const title = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  margin: 0,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
})

export const subtitle = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  margin: 0,
})

export const createButton = style({
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
    },
  },
})

export const statsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space.lg,
  marginBottom: vars.space.xl,
})

export const statCard = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: vars.shadows.md,
    },
  },
})

export const statIcon = style({
  fontSize: "2rem",
  lineHeight: 1,
})

export const statContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
})

export const statNumber = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  lineHeight: 1,
})

export const statLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: vars.fontWeights.medium,
})

export const tableContainer = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  overflow: "hidden",
})

export const noticeGrid = style({
  display: "flex",
  flexDirection: "column",
})

export const noticeCard = style({
  padding: vars.space.xl,
  borderBottom: `1px solid ${vars.colors.border}`,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.backgroundLight,
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
})

export const noticeHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: vars.space.md,
})

export const noticeTitleSection = style({
  flex: 1,
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.xs,
  lineHeight: 1.4,
})

export const noticeMeta = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeAuthor = style({
  color: vars.colors.textLight,
  fontWeight: vars.fontWeights.medium,
})

export const noticeDate = style({
  fontWeight: vars.fontWeights.medium,
})

export const noticeActions = style({
  display: "flex",
  gap: vars.space.sm,
  alignItems: "center",
})

export const actionButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  borderRadius: vars.radii.md,
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  transition: "all 0.2s ease",
})

export const primaryButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderColor: vars.colors.primary,
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
      transform: "translateY(-1px)",
    },
  },
})

export const secondaryButton = style({
  backgroundColor: vars.colors.backgroundLight,
  color: vars.colors.text,
  borderColor: vars.colors.border,
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.border,
    },
  },
})

export const dangerButton = style({
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  borderColor: "#fecaca",
  selectors: {
    "&:hover": {
      backgroundColor: "#dc2626",
      color: vars.colors.white,
    },
  },
})

export const noticeStatusRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: vars.space.md,
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.colors.border}`,
})

// Form styles for notice edit pages
export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const formRow = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
  flexWrap: "wrap",
})

export const label = style({
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  color: vars.colors.text,
})

export const input = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "8px",
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  background: vars.colors.white,
  transition: "all 0.2s ease",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.colors.primary,
      boxShadow: `0 0 0 3px rgba(59, 130, 246, 0.1)`,
    },
  },
})

export const textarea = style([input, {
  minHeight: "120px",
  resize: "vertical",
}])

export const checkbox = style({
  width: "18px",
  height: "18px",
  accentColor: vars.colors.primary,
})

export const checkboxGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const checkboxLabel = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  cursor: "pointer",
})

export const helpText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.xs,
  lineHeight: vars.lineHeights.relaxed,
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.colors.border}`,
  justifyContent: "flex-end",
})

export const submitButton = style([actionButton, primaryButton])

export const cancelButton = style([actionButton, secondaryButton])

export const backButton = style([actionButton, secondaryButton])

export const error = style({
  color: "#dc2626",
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: "8px",
  padding: vars.space.md,
  fontSize: vars.fontSizes.sm,
  marginBottom: vars.space.md,
})

export const statusToggles = style({
  display: "flex",
  gap: vars.space.lg,
  alignItems: "center",
})

export const toggleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  cursor: "pointer",
})

export const toggleInput = style({
  opacity: 0,
  width: 0,
  height: 0,
})

export const slider = style({
  position: "relative",
  display: "inline-block",
  width: "40px",
  height: "20px",
  backgroundColor: "#ccc",
  borderRadius: "20px",
  transition: "0.4s",
  selectors: {
    "&::before": {
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
  },
})

export const sliderChecked = style({
  backgroundColor: vars.colors.primary,
  selectors: {
    "&::before": {
      transform: "translateX(20px)",
    },
  },
})

export const toggleLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  fontWeight: vars.fontWeights.medium,
})

export const attachmentSummary = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
})

export const attachmentCount = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeExpanded = style({
  marginTop: vars.space.lg,
  paddingTop: vars.space.lg,
  borderTop: `1px solid ${vars.colors.border}`,
})

export const noticeContent = style({
  marginBottom: vars.space.md,
})

export const contentPreview = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  backgroundColor: vars.colors.backgroundLight,
  padding: vars.space.md,
  borderRadius: vars.radii.md,
  marginTop: vars.space.sm,
})

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
  color: vars.colors.textLight,
})

export const emptyStateIcon = style({
  fontSize: "3rem",
  marginBottom: vars.space.lg,
  opacity: 0.5,
})

export const loading = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
  color: vars.colors.textLight,
  fontSize: vars.fontSizes.lg,
})

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.sm,
  marginTop: vars.space.xl,
  padding: vars.space.lg,
})

export const paginationButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
      borderColor: vars.colors.primary,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: vars.space.xs,
})

export const pageNumber = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",
  minWidth: "40px",
  textAlign: "center",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryLight,
      borderColor: vars.colors.primary,
    },
  },
})

export const activePage = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderColor: vars.colors.primary,
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
    },
  },
})

// 고객 리뷰 페이지에서 사용하는 추가 스타일들
export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
})

export const tableHeader = style({
  backgroundColor: vars.colors.backgroundLight,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  padding: vars.space.md,
  textAlign: "left",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const tableCell = style({
  padding: vars.space.md,
  textAlign: "left",
  borderBottom: `1px solid ${vars.colors.border}`,
  verticalAlign: "top",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
})

export const skeleton = style({
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
  height: "20px",
  width: "80%",
  animation: "pulse 1.5s ease-in-out infinite",
})

export const link = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontWeight: vars.fontWeights.medium,
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
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
  backgroundColor: "#dcfce7",
  color: "#16a34a",
})

export const unpublishedBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  backgroundColor: "#f3f4f6",
  color: vars.colors.textLight,
})

export const toggle = style({
  position: "relative",
  display: "inline-block",
  width: "40px",
  height: "20px",
})

export const actionButtons = style({
  display: "flex",
  gap: vars.space.xs,
  alignItems: "center",
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
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
    },
  },
})

export const deleteButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  color: "#dc2626",
  backgroundColor: "transparent",
  border: "1px solid #dc2626",
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": {
      backgroundColor: "#dc2626",
      color: vars.colors.white,
    },
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