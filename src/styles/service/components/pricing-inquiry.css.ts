import { style } from "@vanilla-extract/css"

export const container = style({
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  padding: "2.5rem",
  marginBottom: "2rem",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "2rem",
      borderRadius: "20px",
    },
    "(max-width: 480px)": {
      padding: "1.5rem",
      borderRadius: "16px",
    },
  },
})

export const header = style({
  marginBottom: "2.5rem",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "800",
  color: "#3b82f6",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.75rem",
    },
    "(max-width: 480px)": {
      fontSize: "1.5rem",
    },
  },
})

export const description = style({
  fontSize: "1.125rem",
  color: "#64748b",
  lineHeight: "1.7",
  maxWidth: "600px",
  margin: "0 auto",
  fontWeight: "500",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})

export const section = style({
  marginBottom: "3rem",
  position: "relative",
  zIndex: 1,
})

export const sectionTitle = style({
  fontSize: "1.375rem",
  fontWeight: "700",
  color: "#1e293b",
  marginBottom: "1.5rem",
  paddingBottom: "0.75rem",
  borderBottom: "3px solid #3b82f6",
  position: "relative",
  "::after": {
    content: "",
    position: "absolute",
    bottom: "-3px",
    left: 0,
    width: "60px",
    height: "3px",
    background: "linear-gradient(90deg, #3b82f6, #6366f1)",
    borderRadius: "2px",
  },
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },
})

export const equipmentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
  },
})

export const equipmentCard = style({
  border: "1px solid rgba(226, 232, 240, 0.8)",
  borderRadius: "16px",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  ":hover": {
    borderColor: "#3b82f6",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
    transform: "translateY(-2px)",
  },
  ":has(input:checked)": {
    borderColor: "#3b82f6",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
    backgroundColor: "#fafbff",
  },
})

export const equipmentLabel = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  cursor: "pointer",
  width: "100%",
})

export const equipmentCheckbox = style({
  marginTop: "0.375rem",
  width: "1.25rem",
  height: "1.25rem",
  accentColor: "#3b82f6",
  cursor: "pointer",
  flexShrink: 0,
})

export const equipmentInfo = style({
  display: "flex",
  gap: "1rem",
  flex: 1,
  "@media": {
    "(max-width: 480px)": {
      flexDirection: "column",
      gap: "0.75rem",
    },
  },
})

export const equipmentImage = style({
  width: "80px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "12px",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  flexShrink: 0,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  "@media": {
    "(max-width: 480px)": {
      width: "100%",
      height: "150px",
    },
  },
})

export const equipmentDetails = style({
  flex: 1,
  minWidth: 0,
})

export const equipmentName = style({
  fontSize: "1.125rem",
  fontWeight: "700",
  color: "#1e293b",
  marginBottom: "0.5rem",
  lineHeight: 1.3,
})

export const equipmentDescription = style({
  fontSize: "0.9rem",
  color: "#64748b",
  marginBottom: "0.75rem",
  lineHeight: "1.5",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const equipmentSpec = style({
  fontSize: "0.8rem",
  color: "#ffffff",
  backgroundColor: "#3b82f6",
  padding: "0.375rem 0.75rem",
  borderRadius: "8px",
  display: "inline-block",
  fontWeight: "600",
  boxShadow: "0 2px 4px rgba(59, 130, 246, 0.3)",
})

export const formGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.25rem",
    },
  },
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const label = style({
  fontSize: "0.95rem",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "0.5rem",
  letterSpacing: "-0.01em",
})

export const input = style({
  padding: "1rem 1.25rem",
  borderRadius: "12px",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  fontSize: "1rem",
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#fafbff",
  },
  ":disabled": {
    backgroundColor: "#f8fafc",
    color: "#94a3b8",
    cursor: "not-allowed",
    borderColor: "#e2e8f0",
  },
  "::placeholder": {
    color: "#94a3b8",
  },
})

export const select = style([
  input,
  {
    cursor: "pointer",
    paddingRight: "3rem",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: "right 1rem center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.5rem",
    appearance: "none",
  },
])

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "120px",
    lineHeight: "1.6",
    fontFamily: "inherit",
  },
])

export const disclaimer = style({
  backgroundColor: "#fef7cd",
  border: "1px solid #f59e0b",
  borderRadius: "12px",
  padding: "1.25rem",
  marginTop: "2rem",
  fontSize: "0.9rem",
  color: "#92400e",
  lineHeight: "1.6",
  fontWeight: "500",
  position: "relative",
  "::before": {
    content: "ℹ️",
    marginRight: "0.5rem",
    fontSize: "1.1rem",
  },
})