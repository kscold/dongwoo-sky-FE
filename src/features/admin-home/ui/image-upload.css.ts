import { style } from "@vanilla-extract/css"

export const formSection = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
})

export const sectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#111827",
})

export const label = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: "500",
  marginBottom: "0.5rem",
  color: "#374151",
})

export const imageUploadContainer = style({
  marginBottom: "1rem",
})

export const hiddenInput = style({
  display: "none",
})

export const uploadButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
  marginTop: "1rem",
})

export const imageItem = style({
  position: "relative",
  borderRadius: "0.375rem",
  overflow: "hidden",
  backgroundColor: "#f3f4f6",
})

export const previewImage = style({
  width: "100%",
  height: "150px",
  objectFit: "cover",
})

export const deleteButton = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  padding: "0.25rem 0.5rem",
  fontSize: "0.75rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})