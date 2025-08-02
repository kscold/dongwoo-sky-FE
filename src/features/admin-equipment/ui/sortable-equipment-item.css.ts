import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s",
  ":hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
})

export const dragHandle = style({
  padding: "1rem",
  backgroundColor: "#f8fafc",
  borderBottom: "1px solid #e2e8f0",
  cursor: "grab",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#94a3b8",
  ":active": {
    cursor: "grabbing",
  },
})

export const content = style({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem",
  gap: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },
})

export const imageWrapper = style({
  flexShrink: 0,
})

export const image = style({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "0.5rem",
})

export const info = style({
  flex: 1,
})

export const name = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "0.5rem",
})

export const description = style({
  fontSize: "0.875rem",
  color: "#64748b",
  lineHeight: 1.5,
})

export const actions = style({
  display: "flex",
  gap: "0.5rem",
  flexShrink: 0,
})

export const editButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const deleteButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})