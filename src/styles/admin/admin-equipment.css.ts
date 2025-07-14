import { style, globalKeyframes } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const container = style({
  padding: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "32px",
})

export const headerActions = style({
  marginTop: "16px",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: vars.colors.text,
  margin: 0,
  marginBottom: "8px",
})

export const subtitle = style({
  fontSize: "16px",
  color: vars.colors.textLight,
  margin: 0,
})

export const section = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  marginBottom: "24px",
})

export const sectionHeader = style({
  marginBottom: "16px",
  paddingBottom: "12px",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  color: vars.colors.text,
  margin: "0 0 4px 0",
})

export const sectionDescription = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  margin: 0,
})

export const addButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const equipmentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "24px",
  marginBottom: "32px",
})

export const equipmentCard = style({
  position: "relative",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  transition: "all 0.2s ease",
  ":hover": {
    boxShadow: vars.shadows.md,
    transform: "translateY(-2px)",
  },
})

export const equipmentImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
})

export const equipmentTitle = style({
  fontSize: "20px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "8px",
})

export const equipmentDescription = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  marginBottom: "16px",
  lineHeight: 1.5,
})

export const equipmentMeta = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
})

export const equipmentPrice = style({
  fontSize: "18px",
  fontWeight: "600",
  color: vars.colors.primary,
})

export const equipmentStatus = style({
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "500",
})

export const activeStatus = style([
  equipmentStatus,
  {
    backgroundColor: vars.colors.primaryLight,
    color: vars.colors.primary,
  },
])

export const inactiveStatus = style([
  equipmentStatus,
  {
    backgroundColor: vars.colors.accent,
    color: vars.colors.textLight,
  },
])

export const equipmentActions = style({
  display: "flex",
  gap: "8px",
})

export const editButton = style({
  padding: "8px 16px",
  fontSize: "14px",
  fontWeight: "500",
  color: vars.colors.primary,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: "white",
  },
})

export const deleteButton = style({
  padding: "8px 16px",
  fontSize: "14px",
  fontWeight: "500",
  color: vars.colors.danger,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.danger}`,
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.danger,
    color: "white",
  },
})

export const modal = style({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
})

export const modalContent = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "0",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80vh",
  overflow: "hidden",
  boxShadow: vars.shadows.xl,
})

export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: vars.colors.textLight,
  padding: "4px",
  borderRadius: "4px",
  ":hover": {
    backgroundColor: vars.colors.gray[100],
  },
})

export const form = style({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxHeight: "60vh",
  overflow: "auto",
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
})

export const label = style({
  fontSize: "14px",
  fontWeight: "600",
  color: vars.colors.text,
})

export const input = style({
  padding: "12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  fontSize: "14px",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "80px",
  },
])

export const errorMessage = style({
  fontSize: "12px",
  color: vars.colors.error,
})

export const checkboxGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
})

export const checkbox = style({
  width: "16px",
  height: "16px",
})

export const modalActions = style({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
  paddingTop: "20px",
  borderTop: `1px solid ${vars.colors.border}`,
})

export const cancelButton = style({
  padding: "10px 20px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  backgroundColor: "white",
  color: vars.colors.text,
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.gray[50],
  },
})

export const saveButton = style({
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: vars.colors.primary,
  color: "white",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
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

export const emptyState = style({
  textAlign: "center",
  padding: "60px 20px",
  color: vars.colors.textLight,
})

export const emptyStateIcon = style({
  fontSize: "48px",
  marginBottom: "16px",
})

export const emptyStateTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "8px",
})

export const emptyStateDescription = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  marginBottom: "24px",
})

export const emptyStateButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const adminEquipmentPage = style({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-lg)",
})

export const pageHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const sortableContext = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "var(--space-md)",
})

export const cardList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "var(--space-md)",
})

export const card = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid var(--colors-gray-200)",
  borderRadius: "var(--radii-md)",
  backgroundColor: "var(--colors-white)",
  transition: "box-shadow 0.2s ease-in-out",
  overflow: "hidden",
  ":hover": {
    boxShadow: "var(--shadows-md)",
  },
})

export const cardImageWrapper = style({
  position: "relative",
  width: "100%",
  paddingTop: "60%", // 5:3 aspect ratio
  backgroundColor: "var(--colors-gray-100)",
  overflow: "hidden",
})

export const cardImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const cardBody = style({
  padding: "var(--space-md)",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-sm)",
})

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "var(--space-sm)",
})

export const cardTitle = style({
  fontSize: "var(--font-sizes-lg)",
  fontWeight: "bold",
})

export const cardDescription = style({
  fontSize: "var(--font-sizes-sm)",
  color: "var(--colors-gray-600)",
  flexGrow: 1,
  lineHeight: 1.5,
})

export const cardFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 var(--space-md) var(--space-md)`,
})

export const statusBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-xs)",
  padding: `var(--space-xs) var(--space-sm)`,
  borderRadius: "var(--radii-full)",
  fontSize: "var(--font-sizes-xs)",
  fontWeight: "500",
})

export const published = style({
  backgroundColor: "var(--colors-safe-100)",
  color: "var(--colors-safe-800)",
})

export const notPublished = style({
  backgroundColor: "var(--colors-gray-100)",
  color: "var(--colors-gray-800)",
})

export const iconButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: "var(--space-xs)",
  borderRadius: "var(--radii-sm)",
  color: "var(--colors-gray-500)",
  ":hover": {
    backgroundColor: "var(--colors-gray-100)",
    color: "var(--colors-gray-800)",
  },
})

export const dragHandle = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px",
  borderRadius: "6px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(4px)",
  cursor: "grab",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  ":active": {
    cursor: "grabbing",
  },
})

export const indexNumber = style({
  fontSize: "12px",
  fontWeight: "600",
  color: vars.colors.textLight,
  backgroundColor: vars.colors.gray[100],
  padding: "2px 6px",
  borderRadius: "4px",
})

export const dragIcon = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  lineHeight: 1,
})

export const equipmentImageContainer = style({
  position: "relative",
  width: "100%",
  height: "180px",
  marginBottom: "16px",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: vars.colors.gray[50],
})

export const noImage = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.gray[100],
  color: vars.colors.textLight,
  fontSize: "14px",
  gap: "8px",
})

export const equipmentInfo = style({
  marginBottom: "16px",
})

const pulse = globalKeyframes("pulse", {
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
})

export const skeletonCard = style({
  display: "flex",
  flexDirection: "column",
  height: "360px",
  backgroundColor: "var(--colors-gray-100)",
  borderRadius: "var(--radii-md)",
  animation: `${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})

export const formRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})
