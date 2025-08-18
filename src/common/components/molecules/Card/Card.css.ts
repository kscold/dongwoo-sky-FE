import { style, styleVariants } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  overflow: "hidden",
})

export const variants = styleVariants({
  default: {},
  admin: {
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  elevated: {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    ":hover": {
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
})

export const paddings = styleVariants({
  sm: { padding: "1rem" },
  md: { padding: "1.5rem" },
  lg: { padding: "2rem" },
})

export const cardHeader = style({
  borderBottom: "1px solid #f3f4f6",
  paddingBottom: "1rem",
  marginBottom: "1.5rem",
})

export const cardBody = style({
  // 기본 스타일은 없음 - 내용에 따라 결정
})

export const cardFooter = style({
  borderTop: "1px solid #f3f4f6",
  paddingTop: "1rem",
  marginTop: "1.5rem",
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.75rem",
})

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "0.5rem",
  lineHeight: "1.3",
})

export const cardDescription = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  lineHeight: "1.5",
  margin: 0,
})