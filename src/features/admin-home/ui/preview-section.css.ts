import { style } from "@vanilla-extract/css"

export const section = style({
  marginTop: "2rem",
})

export const sectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#111827",
})

export const previewContainer = style({
  backgroundColor: "#f9fafb",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  border: "1px solid #e5e7eb",
})

export const previewContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const previewTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#111827",
})

export const previewSubtitle = style({
  fontSize: "1.125rem",
  color: "#6b7280",
})

export const previewButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  width: "fit-content",
})

export const previewNote = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  fontStyle: "italic",
  marginTop: "0.5rem",
})

export const heroPreview = style({
  position: "relative",
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "0.5rem",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const heroContent = style({
  textAlign: "center",
  color: "white",
  padding: "2rem",
  maxWidth: "800px",
})

export const heroPreviewSubtitle = style({
  fontSize: "1.125rem",
  marginBottom: "0.5rem",
  opacity: 0.9,
})

export const heroPreviewTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  lineHeight: 1.2,
})

export const heroPreviewDescription = style({
  fontSize: "1.125rem",
  marginBottom: "2rem",
  opacity: 0.9,
})

export const heroButtons = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "1.5rem",
})

export const primaryPreviewButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const secondaryPreviewButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "transparent",
  color: "white",
  border: "2px solid white",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "white",
    color: "#111827",
  },
})

export const imageIndicators = style({
  position: "absolute",
  bottom: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "0.5rem",
})

export const indicator = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "white",
  opacity: 0.5,
  cursor: "pointer",
  transition: "opacity 0.2s",
  ":hover": {
    opacity: 0.8,
  },
})

export const active = style({
  opacity: 1,
})