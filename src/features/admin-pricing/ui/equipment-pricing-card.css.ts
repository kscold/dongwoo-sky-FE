import { style } from "@vanilla-extract/css"

export const equipmentCard = style({
  backgroundColor: "#f9fafb",
  borderRadius: "0.5rem",
  padding: "1rem",
  marginBottom: "1rem",
})

export const equipmentHeader = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
})

export const equipmentImage = style({
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "0.375rem",
})

export const equipmentInfo = style({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const equipmentName = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#111827",
})

export const headerActions = style({
  display: "flex",
  gap: "0.5rem",
})

export const equipmentBody = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const pricingGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const pricingField = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const fieldLabel = style({
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#6b7280",
})

export const fieldValue = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#111827",
})

export const timeRange = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const notesField = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const notesInput = style({
  padding: "0.5rem",
  fontSize: "0.875rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})