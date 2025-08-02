import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const pageContainer = style({
  padding: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "32px",
})

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "16px",
  ":hover": {
    textDecoration: "underline",
  },
})

export const backLinkIcon = style({
  width: "16px",
  height: "16px",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: "8px",
})

export const description = style({
  fontSize: "16px",
  color: vars.colors.textLight,
  marginBottom: "24px",
})

export const formActions = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "32px",
  paddingTop: "24px",
  borderTop: `1px solid ${vars.colors.border}`,
})

export const saveButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryHover,
  },
  ":disabled": {
    backgroundColor: vars.colors.textLight,
    cursor: "not-allowed",
  },
})