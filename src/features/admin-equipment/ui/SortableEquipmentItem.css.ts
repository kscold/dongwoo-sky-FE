import { style, globalKeyframes } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

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

export const equipmentImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
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