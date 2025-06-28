import { style } from "@vanilla-extract/css"
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

export const tableHeader = style({
  backgroundColor: vars.colors.backgroundLight,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  padding: vars.space.md,
  textAlign: "left",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const tableRow = style({
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const tableCell = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
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
  backgroundColor: "#E0F2FE",
  color: "#0369A1",
  border: "1px solid #0369A1",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  textDecoration: "none",
  marginRight: vars.space.sm,
  display: "inline-block",
})

export const deleteButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: "#FEE2E2",
  color: "#DC2626",
  border: "1px solid #DC2626",
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
  backgroundColor: "#FEE2E2",
  color: "#DC2626",
  borderRadius: vars.radii.md,
})

export const empty = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})

// 폼 관련 스타일들
export const form = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  border: `1px solid ${vars.colors.border}`,
})

export const formGroup = style({
  marginBottom: vars.space.lg,
})

export const formRow = style({
  display: "flex",
  gap: vars.space.xl,
  marginBottom: vars.space.lg,
  "@media": {
    "screen and (max-width: 768px)": {
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
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primary}20`,
  },
})

export const textarea = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  minHeight: "120px",
  resize: "vertical",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primary}20`,
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
  accentColor: vars.colors.primary,
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
  backgroundColor: vars.colors.backgroundLight,
})

export const helpText = style({
  display: "block",
  marginTop: vars.space.xs,
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "flex-end",
  marginTop: vars.space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
})

export const submitButton = style({
  padding: `${vars.space.sm} ${vars.space.xl}`,
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
    backgroundColor: vars.colors.textLight,
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  padding: `${vars.space.sm} ${vars.space.xl}`,
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
