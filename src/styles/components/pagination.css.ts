import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.sm,
  marginTop: vars.space.xxl,
  marginBottom: vars.space.xl,
  width: "100%",
  padding: `${vars.space.lg} 0`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: vars.space.xl,
      marginBottom: vars.space.lg,
      gap: vars.space.xs,
      padding: `${vars.space.md} 0`,
    },
  },
})

export const pageButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: "white",
  border: "2px solid #e2e8f0",
  borderRadius: "12px",
  color: "#64748b",
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  minHeight: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "#667eea",
    borderColor: "#667eea",
    color: "white",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.25)",
  },
  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.xs} ${vars.space.sm}`,
      fontSize: vars.fontSizes.xs,
      minHeight: "40px",
      borderRadius: "10px",
    },
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: vars.space.xs,
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 480px)": {
      gap: "4px",
    },
  },
})

export const pageNumber = style({
  minWidth: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  border: "2px solid #e2e8f0",
  borderRadius: "12px",
  color: "#64748b",
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  position: "relative",
  ":hover": {
    backgroundColor: "#f1f5f9",
    borderColor: "#667eea",
    color: "#667eea",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.15)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      minWidth: "40px",
      height: "40px",
      fontSize: vars.fontSizes.xs,
      borderRadius: "10px",
    },
    "screen and (max-width: 480px)": {
      minWidth: "36px",
      height: "36px",
      borderRadius: "8px",
    },
  },
})

export const active = style({
  backgroundColor: "#667eea",
  borderColor: "#667eea",
  color: "white",
  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
  ":hover": {
    backgroundColor: "#5a67d8",
    borderColor: "#5a67d8",
    color: "white",
    boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
  },
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "10px",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
    pointerEvents: "none",
  },
})
