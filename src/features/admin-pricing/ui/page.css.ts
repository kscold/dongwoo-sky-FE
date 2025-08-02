import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "2rem",
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
})

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  fontSize: "1.125rem",
  color: "#6b7280",
})

export const header = style({
  marginBottom: "2rem",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "800",
  color: "#111827",
  marginBottom: "0.5rem",
})

export const subtitle = style({
  fontSize: "1.125rem",
  color: "#6b7280",
  lineHeight: "1.6",
})

export const section = style({
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "2rem",
  marginBottom: "2rem",
  border: "1px solid #e5e7eb",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
})

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "1.5rem",
  paddingBottom: "0.75rem",
  borderBottom: "2px solid #3b82f6",
})

export const saveButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "0.75rem 2rem",
  borderRadius: "8px",
  border: "none",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s",
  marginTop: "2rem",
  ":hover": {
    backgroundColor: "#2563eb",
  },
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const equipmentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gap: "1.5rem",
  marginTop: "1.5rem",
})

export const actionButtons = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2rem",
  gap: "1rem",
})