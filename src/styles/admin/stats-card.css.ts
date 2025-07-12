import { style } from "@vanilla-extract/css"

export const card = style({
  background: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e5e7eb",
  transition: "all 0.2s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
  },
})

export const blue = style({
  borderLeft: "4px solid #3b82f6",
})

export const green = style({
  borderLeft: "4px solid #10b981",
})

export const purple = style({
  borderLeft: "4px solid #8b5cf6",
})

export const orange = style({
  borderLeft: "4px solid #f59e0b",
})

export const header = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
})

export const iconContainer = style({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "12px",
})

export const icon = style({
  fontSize: "24px",
})

export const titleContainer = style({
  flex: 1,
})

export const title = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
  margin: 0,
  lineHeight: "1.2",
})

export const subtitle = style({
  fontSize: "14px",
  color: "#6b7280",
  margin: "4px 0 0 0",
  lineHeight: "1.2",
})

export const valueContainer = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
})

export const value = style({
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
  lineHeight: "1",
})

export const trend = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "14px",
  fontWeight: "600",
  padding: "4px 8px",
  borderRadius: "6px",
})

export const positive = style({
  color: "#059669",
  background: "#ecfdf5",
})

export const negative = style({
  color: "#dc2626",
  background: "#fef2f2",
})

export const trendIcon = style({
  fontSize: "12px",
})

export const trendValue = style({
  fontSize: "12px",
})