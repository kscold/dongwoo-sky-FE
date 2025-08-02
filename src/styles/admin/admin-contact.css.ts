import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
  padding: vars.space.xxl,
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  minHeight: "100vh",
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
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.md,
    },
  },
})

export const title = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: "800",
  color: vars.colors.text,
  marginBottom: vars.space.sm,
  background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
})

export const subtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
})

export const filterSection = style({
  display: "flex",
  gap: vars.space.md,
  marginBottom: vars.space.xl,
  padding: vars.space.lg,
  background: vars.colors.white,
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  flexWrap: "wrap",
})

export const filterButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  background: vars.colors.white,
  color: vars.colors.text,
  fontSize: vars.fontSizes.md,
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: vars.colors.primary,
      transform: "translateY(-1px)",
    },
  },
})

export const filterButtonActive = style({
  background: vars.colors.primary,
  color: vars.colors.white,
  borderColor: vars.colors.primary,
  selectors: {
    "&:hover": {
      background: vars.colors.primaryDark,
    },
  },
})

export const contactList = style({
  display: "grid",
  gap: vars.space.lg,
})

export const contactCard = style({
  background: vars.colors.white,
  borderRadius: "16px",
  padding: vars.space.xl,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    },
  },
})

export const contactHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: vars.space.md,
})

export const contactInfo = style({
  flex: 1,
})

export const contactName = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.xs,
})

export const contactPhone = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.primary,
  marginBottom: vars.space.xs,
})

export const contactLocation = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const statusBadge = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: "20px",
  fontSize: vars.fontSizes.sm,
  fontWeight: "600",
  selectors: {
    '&[data-status="pending"]': {
      background: "#fef3c7",
      color: "#d97706",
    },
    '&[data-status="processing"]': {
      background: "#dbeafe",
      color: "#2563eb",
    },
  },
})

export const contactContent = style({
  marginBottom: vars.space.md,
})

export const contactDetails = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  marginBottom: vars.space.sm,
})

export const contactDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const contactActions = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
})

export const viewButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: vars.colors.primaryDark,
      transform: "translateY(-1px)",
    },
  },
})

export const statusSelect = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  background: vars.colors.white,
  cursor: "pointer",
})

// 모달 스타일
export const modal = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: vars.space.lg,
})

export const modalContent = style({
  background: vars.colors.white,
  borderRadius: "24px",
  maxWidth: "600px",
  width: "100%",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
})

export const modalHeader = style({
  padding: vars.space.xl,
  borderBottom: "1px solid #e2e8f0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const modalTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: "700",
  color: vars.colors.text,
})

export const closeButton = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "none",
  background: "#f1f5f9",
  color: vars.colors.text,
  fontSize: vars.fontSizes.xl,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: "#e2e8f0",
    },
  },
})

export const modalBody = style({
  padding: vars.space.xl,
})

export const detailSection = style({
  marginBottom: vars.space.xl,
  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
})

export const detailSectionTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: vars.space.md,
})

export const detailContent = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  whiteSpace: "pre-wrap",
})

export const dateInfo = style({
  marginTop: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})

export const modalActions = style({
  padding: vars.space.xl,
  borderTop: "1px solid #e2e8f0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const deleteButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "#ef4444",
  color: vars.colors.white,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: "#dc2626",
      transform: "translateY(-1px)",
    },
  },
})

export const statusActions = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
})

export const modalStatusSelect = style([statusSelect])

export const callButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "#10b981",
  color: vars.colors.white,
  textDecoration: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  display: "inline-block",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: "#059669",
      transform: "translateY(-1px)",
    },
  },
})

// 웹훅 관련 스타일
export const webhookButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
  color: vars.colors.white,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  selectors: {
    "&:hover": {
      background: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
      transform: "translateY(-1px)",
    },
  },
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  cursor: "pointer",
})

export const checkbox = style({
  width: "18px",
  height: "18px",
  accentColor: vars.colors.primary,
})

export const webhookInput = style({
  width: "100%",
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
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
    "&:disabled": {
      background: "#f8fafc",
      color: vars.colors.textLight,
      cursor: "not-allowed",
    },
  },
})

export const helpText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.xs,
  lineHeight: vars.lineHeights.relaxed,
})

export const testButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  color: vars.colors.white,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
      transform: "translateY(-1px)",
    },
    "&:disabled": {
      background: "#9ca3af",
      cursor: "not-allowed",
      transform: "none",
    },
  },
})

export const cancelButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "transparent",
  color: vars.colors.textLight,
  border: "1px solid #e2e8f0",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: "#f8fafc",
      borderColor: vars.colors.textLight,
    },
  },
})

export const saveButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: "12px",
  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  color: vars.colors.white,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      transform: "translateY(-1px)",
    },
  },
})

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: vars.space.xxl,
  background: vars.colors.white,
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  marginBottom: vars.space.xl,
})

export const errorContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: vars.space.xl,
  background: "#fee2e2",
  borderRadius: "16px",
  border: "1px solid #fca5a5",
  marginBottom: vars.space.xl,
  color: "#dc2626",
  fontWeight: "600",
})