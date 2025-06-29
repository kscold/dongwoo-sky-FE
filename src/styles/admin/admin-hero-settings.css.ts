import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
})

export const header = style({
  marginBottom: "2rem",
  textAlign: "center",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#1a1a1a",
  marginBottom: "0.5rem",
})

export const subtitle = style({
  fontSize: "1rem",
  color: "#666",
  fontWeight: "400",
})

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
})

// Loading and Error States
export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  gap: "1rem",
})

export const spinner = style({
  width: "40px",
  height: "40px",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #007acc",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
})

export const errorState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  gap: "1rem",
  textAlign: "center",
})

export const errorMessage = style({
  color: "#dc3545",
  fontSize: "0.9rem",
  fontFamily: "monospace",
  backgroundColor: "#f8d7da",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  border: "1px solid #f5c6cb",
})

export const retryButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#007acc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#005a9e",
  },
})

// Preview Section
export const previewSection = style({
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "1.5rem",
})

export const sectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#1a1a1a",
  marginBottom: "1rem",
})

export const heroPreview = style({
  position: "relative",
  backgroundColor: "#fff",
  border: "1px solid #dee2e6",
  borderRadius: "8px",
  overflow: "hidden",
})

export const previewContainer = style({
  position: "relative",
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
})

export const previewBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "brightness(0.7)",
})

export const previewContent = style({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  color: "white",
  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  padding: "2rem",
})

export const previewTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
})

export const previewSubtitle = style({
  fontSize: "1.25rem",
  fontWeight: "400",
  marginBottom: "1rem",
})

export const previewDescription = style({
  fontSize: "1rem",
  marginBottom: "1.5rem",
  lineHeight: "1.6",
})

export const previewCta = style({
  padding: "0.75rem 2rem",
  backgroundColor: "#007acc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
})

export const statusBadge = style({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  zIndex: 2,
})

export const activeStatus = style({
  backgroundColor: "#d4edda",
  color: "#155724",
  padding: "0.25rem 0.75rem",
  borderRadius: "4px",
  fontSize: "0.875rem",
  fontWeight: "500",
})

export const inactiveStatus = style({
  backgroundColor: "#f8d7da",
  color: "#721c24",
  padding: "0.25rem 0.75rem",
  borderRadius: "4px",
  fontSize: "0.875rem",
  fontWeight: "500",
})

// Edit Section
export const editSection = style({
  backgroundColor: "#fff",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "1.5rem",
})

export const editHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
})

export const editActions = style({
  display: "flex",
  gap: "0.5rem",
})

export const editButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#007acc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#005a9e",
  },
})

export const editButtonGroup = style({
  display: "flex",
  gap: "0.5rem",
})

export const saveButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#218838",
  },
  ":disabled": {
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#6c757d",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#5a6268",
  },
})

// Form Styles
export const editForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
})

export const viewForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const viewGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const label = style({
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#374151",
})

export const input = style({
  padding: "0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "0.9rem",
  transition: "border-color 0.2s, box-shadow 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#007acc",
    boxShadow: "0 0 0 3px rgba(0, 122, 204, 0.1)",
  },
})

export const textarea = style({
  padding: "0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontFamily: "inherit",
  resize: "vertical",
  transition: "border-color 0.2s, box-shadow 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#007acc",
    boxShadow: "0 0 0 3px rgba(0, 122, 204, 0.1)",
  },
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: "500",
  cursor: "pointer",
})

export const checkbox = style({
  width: "1rem",
  height: "1rem",
  cursor: "pointer",
})

export const helpText = style({
  fontSize: "0.8rem",
  color: "#6b7280",
  marginTop: "0.25rem",
})

export const viewValue = style({
  padding: "0.75rem",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  fontSize: "0.9rem",
  color: "#374151",
})

export const activeText = style({
  color: "#059669",
  fontWeight: "500",
})

export const inactiveText = style({
  color: "#dc2626",
  fontWeight: "500",
})

// Image Styles
export const imageUrlGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const imagePreview = style({
  width: "100%",
  maxWidth: "400px",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  overflow: "hidden",
})

export const previewImage = style({
  width: "100%",
  height: "auto",
  maxHeight: "200px",
  objectFit: "cover",
})

export const currentImagePreview = style({
  width: "100%",
  maxWidth: "400px",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  overflow: "hidden",
})

export const currentImage = style({
  width: "100%",
  height: "auto",
  maxHeight: "200px",
  objectFit: "cover",
})

export const noImage = style({
  color: "#9ca3af",
  fontStyle: "italic",
})

// Section styles
export const section = style({
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
})

export const sectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
})

export const sectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0",
})

// Image management styles
export const uploadButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1rem",
  marginBottom: "1rem",
})

export const imageItem = style({
  position: "relative",
  backgroundColor: "#f9fafb",
  border: "2px solid #e5e7eb",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "move",
  transition: "all 0.2s",
  ":hover": {
    borderColor: "#3b82f6",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
})

export const dragOver = style({
  borderColor: "#10b981",
  backgroundColor: "#ecfdf5",
  transform: "scale(1.02)",
})

export const inactive = style({
  opacity: "0.6",
  filter: "grayscale(50%)",
})

export const imagePreview = style({
  position: "relative",
  width: "100%",
  height: "160px",
  overflow: "hidden",
})

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const imageOverlay = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
  padding: "1rem",
  transform: "translateY(100%)",
  transition: "transform 0.2s",
  selectors: {
    [`${imageItem}:hover &`]: {
      transform: "translateY(0)",
    },
  },
})

export const imageInfo = style({
  color: "white",
  fontSize: "0.875rem",
})

export const imageName = style({
  display: "block",
  fontWeight: "500",
  marginBottom: "0.25rem",
})

export const imageOrder = style({
  display: "block",
  opacity: "0.8",
})

export const imageActions = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.75rem",
  backgroundColor: "white",
})

export const toggleLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  fontSize: "0.875rem",
})

export const toggleInput = style({
  display: "none",
})

export const toggleSlider = style({
  position: "relative",
  width: "44px",
  height: "24px",
  backgroundColor: "#d1d5db",
  borderRadius: "12px",
  transition: "background-color 0.2s",
  "::before": {
    content: '""',
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "transform 0.2s",
  },
  selectors: {
    [`${toggleInput}:checked + &`]: {
      backgroundColor: "#10b981",
    },
    [`${toggleInput}:checked + &::before`]: {
      transform: "translateX(20px)",
    },
  },
})

export const toggleText = style({
  fontWeight: "500",
})

export const deleteButton = style({
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "0.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const dragHandle = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "move",
  userSelect: "none",
})

export const emptyState = style({
  textAlign: "center",
  padding: "3rem 1rem",
  color: "#6b7280",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  border: "2px dashed #d1d5db",
})

export const imageHelp = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  lineHeight: "1.5",
})

// Form styles
export const settingsForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
})

export const input = style({
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "0.875rem",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "80px",
  },
])

export const displayValue = style({
  padding: "0.5rem 0",
  color: "#1f2937",
  fontSize: "0.875rem",
  lineHeight: "1.5",
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
})

export const checkbox = style({
  width: "1rem",
  height: "1rem",
  accentColor: "#3b82f6",
})

export const editActions = style({
  display: "flex",
  gap: "0.5rem",
})

export const editButton = style({
  backgroundColor: "#f59e0b",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#d97706",
  },
})

export const saveButton = style({
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#059669",
  },
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  backgroundColor: "#6b7280",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#4b5563",
  },
})

// Preview styles
export const previewContainer = style({
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  overflow: "hidden",
})

export const heroPreview = style({
  position: "relative",
  height: "300px",
})

export const previewBackground = style({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
})

export const previewContent = style({
  position: "relative",
  zIndex: "1",
  textAlign: "center",
  color: "white",
  maxWidth: "600px",
  padding: "2rem",
})

export const previewTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
})

export const previewSubtitle = style({
  fontSize: "1.25rem",
  fontWeight: "500",
  marginBottom: "1rem",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewDescription = style({
  fontSize: "1rem",
  lineHeight: "1.6",
  marginBottom: "2rem",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
  },
})

export const previewIndicators = style({
  position: "absolute",
  bottom: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "0.5rem",
})

export const previewIndicator = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transition: "background-color 0.2s",
})

export const active = style({
  backgroundColor: "white",
})

export const emptyPreview = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  color: "#6b7280",
  backgroundColor: "#f9fafb",
})
