import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const container = style({
  padding: vars.space.lg,
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
  color: vars.colors.text,
  marginBottom: vars.space.md,
})

export const subtitle = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  marginBottom: vars.space.lg,
})

export const buttonGroup = style({
  display: "flex",
  gap: vars.space.sm,
})

export const editButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled,
    cursor: "not-allowed",
  },
})

export const saveButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled,
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.secondary,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled,
    cursor: "not-allowed",
  },
})

export const section = style({
  marginBottom: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const field = style({
  marginBottom: vars.space.md,
})

export const label = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  color: vars.colors.text,
  marginBottom: vars.space.xs,
})

export const input = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  backgroundColor: vars.colors.white,

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
  },
})

export const textarea = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  backgroundColor: vars.colors.white,
  resize: "vertical",
  minHeight: "80px",

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px ${vars.colors.primaryTransparent}`,
  },
})

export const value = style({
  padding: vars.space.sm,
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  minHeight: "40px",
  display: "flex",
  alignItems: "center",
})

export const uploadButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.secondary,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled,
    cursor: "not-allowed",
  },
})

export const link = style({
  color: vars.colors.primary,
  textDecoration: "none",

  ":hover": {
    textDecoration: "underline",
  },
})

export const loadingMessage = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
})

export const errorMessage = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.md,
  color: vars.colors.danger,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.danger}`,
})

export const emptyMessage = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
})

export const preview = style({
  marginTop: vars.space.md,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.md,
})

export const previewHero = style({
  position: "relative",
  height: "500px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  backgroundColor: "#1a1a1a",
})

export const previewOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space.xl,
  textAlign: "center",
})

export const previewTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.gray[800],
  marginBottom: vars.space.md,
  textAlign: "center",
})

export const previewSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.white,
  marginBottom: vars.space.sm,
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.white,
  marginBottom: vars.space.lg,
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  maxWidth: "600px",
})

export const previewButton = style({
  padding: "16px 28px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  transform: "translateY(0)",

  ":hover": {
    transform: "translateY(-2px)",
  },
})

export const primaryPreviewButton = style([
  previewButton,
  {
    backgroundColor: "#00C2B8",
    color: "white",
    border: "none",
    boxShadow: "0 4px 20px rgba(0, 194, 184, 0.3)",

    ":hover": {
      boxShadow: "0 6px 25px rgba(0, 194, 184, 0.4)",
    },
  },
])

export const secondaryPreviewButton = style([
  previewButton,
  {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid #00C2B8",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",

    ":hover": {
      backgroundColor: "rgba(0, 194, 184, 0.1)",
    },
  },
])

export const previewSection = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.gray[200]}`,
})

export const previewContainer = style({
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.md,
  marginBottom: vars.space.md,
})

export const heroPreview = style({
  position: "relative",
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const heroContent = style({
  position: "relative",
  zIndex: 2,
  padding: vars.space.xl,
  textAlign: "center",
  color: vars.colors.white,
  maxWidth: "800px",
})

export const heroPreviewTitle = style({
  fontSize: "2rem",
  fontWeight: vars.fontWeights.bold,
  lineHeight: 1.2,
  marginBottom: vars.space.md,
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
})

export const heroPreviewSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: "#64FFDA",
  marginBottom: vars.space.sm,
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
  lineHeight: 1.4,
})

export const heroPreviewDescription = style({
  fontSize: vars.fontSizes.md,
  color: "rgba(255, 255, 255, 0.92)",
  marginBottom: vars.space.lg,
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
  lineHeight: 1.6,
})

export const heroButtons = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "center",
  flexWrap: "wrap",
})

export const imageIndicators = style({
  position: "absolute",
  bottom: vars.space.md,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: vars.space.xs,
  zIndex: 3,
})

export const indicator = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transition: "all 0.3s ease",
})

export const active = style({
  backgroundColor: "#00C2B8",
})

export const previewNote = style({
  padding: vars.space.md,
  backgroundColor: vars.colors.gray[50],
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.gray[200]}`,
})

// Action Button Container
export const actionButtonContainer = style({
  display: "flex",
  gap: vars.space.sm,
  alignItems: "center",
})

export const editButtonGroup = style({
  display: "flex",
  gap: vars.space.sm,
  alignItems: "center",
})

// Toggle Switch Styles
export const toggleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const toggleSwitch = style({
  position: "relative",
  display: "inline-block",
  width: "44px",
  height: "24px",
})

export const toggleInput = style({
  opacity: "0",
  width: "0",
  height: "0",
})

export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: vars.colors.gray[300],
  transition: "0.2s",
  borderRadius: "24px",
  ":before": {
    position: "absolute",
    content: '""',
    height: "18px",
    width: "18px",
    left: "3px",
    bottom: "3px",
    backgroundColor: "white",
    transition: "0.2s",
    borderRadius: "50%",
  },
})

export const toggleActive = style({
  backgroundColor: vars.colors.success,
})

export const toggleActiveSlider = style({
  ":before": {
    transform: "translateX(20px)",
  },
})

export const toggleLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  fontWeight: "500",
})

// Status Badge Styles
export const statusBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.25rem 0.75rem",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.xs,
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
})

export const statusActive = style({
  backgroundColor: vars.colors.gray[100],
  color: vars.colors.success,
})

export const statusInactive = style({
  backgroundColor: vars.colors.gray[100],
  color: vars.colors.danger,
})

// Hero Section Components
export const heroSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

export const heroSectionField = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
})

export const heroSectionLabel = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  color: vars.colors.text,
})

export const heroSectionInput = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  background: "white",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const heroSectionTextarea = style([
  heroSectionInput,
  {
    minHeight: "80px",
    resize: "vertical",
  },
])

export const heroSectionValue = style({
  padding: vars.space.sm,
  background: vars.colors.background,
  borderRadius: vars.radii.md,
  color: vars.colors.text,
  fontSize: vars.fontSizes.sm,
  border: `1px solid ${vars.colors.border}`,
})

// Image Upload Section
export const formSection = style({
  marginBottom: vars.space.md,
})

export const imageUploadContainer = style({
  border: `2px dashed ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  padding: vars.space.lg,
  textAlign: "center",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  background: vars.colors.background,
  ":hover": {
    borderColor: vars.colors.primary,
    background: vars.colors.backgroundLight,
  },
})

export const hiddenInput = style({
  display: "none",
})

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space.md,
  marginTop: vars.space.md,
})

export const imageItem = style({
  position: "relative",
  borderRadius: vars.radii.md,
  overflow: "hidden",
  border: `1px solid ${vars.colors.border}`,
  transition: "box-shadow 0.2s ease",
  ":hover": {
    boxShadow: vars.shadows.md,
  },
})

export const previewImage = style({
  width: "100%",
  height: "140px",
  objectFit: "cover",
})

export const deleteButton = style({
  position: "absolute",
  top: "6px",
  right: "6px",
  background: "rgba(239, 68, 68, 0.9)",
  color: "white",
  border: "none",
  borderRadius: vars.radii.sm,
  width: "24px",
  height: "24px",
  cursor: "pointer",
  fontSize: vars.fontSizes.xs,
  fontWeight: "500",
  transition: "background-color 0.2s ease",
  ":hover": {
    background: vars.colors.danger,
  },
})

// 누락된 스타일들 추가
export const formGroup = style({
  marginBottom: vars.space.md,
})
