import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
})

export const modalContent = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  width: "90%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: vars.shadows.xl,
  display: "flex",
  flexDirection: "column",
})

export const modalHeader = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const modalTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  margin: 0,
})

export const closeButton = style({
  background: "transparent",
  border: "none",
  fontSize: vars.fontSizes.xl,
  cursor: "pointer",
  padding: vars.space.sm,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.textLight,
  transition: "color 0.2s",
  ":hover": {
    color: vars.colors.textStrong,
  },
})

export const modalBody = style({
  padding: vars.space.lg,
  overflowY: "auto",
  flex: 1,
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.sm,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginBottom: vars.space.md,
})

export const noticeContent = style({
  fontSize: vars.fontSizes.md,
  lineHeight: vars.lineHeights.relaxed,
  color: vars.colors.text,
  whiteSpace: "pre-wrap",
})

export const attachments = style({
  marginTop: vars.space.xl,
})

export const attachmentsTitle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
})

export const attachmentsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const attachmentItem = style({
  marginBottom: vars.space.sm,
})

export const attachmentLink = style({
  color: vars.colors.primary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  ":hover": {
    textDecoration: "underline",
  },
})

export const modalFooter = style({
  padding: vars.space.md,
  borderTop: `1px solid ${vars.colors.border}`,
  display: "flex",
  justifyContent: "flex-end",
})

export const todayCloseButton = style({
  backgroundColor: vars.colors.backgroundLight,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.backgroundMedium,
  },
})
