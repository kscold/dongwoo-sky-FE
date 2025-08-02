import { style } from "@vanilla-extract/css"

export const formSection = style({
  backgroundColor: "#ffffff",
  borderRadius: "32px",
  padding: "3rem",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
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
      padding: "2.5rem",
      borderRadius: "24px",
    },
    "(max-width: 480px)": {
      padding: "2rem",
      borderRadius: "20px",
    },
  },
})

export const formContainer = style({
  maxWidth: "700px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
})

export const formTitle = style({
  fontSize: "2.5rem",
  fontWeight: "800",
  color: "#3b82f6",
  marginBottom: "1.5rem",
  textAlign: "center",
  letterSpacing: "-0.02em",
  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2.25rem",
    },
    "(max-width: 480px)": {
      fontSize: "2rem",
    },
  },
})

export const formDescription = style({
  fontSize: "1.125rem",
  color: "#64748b",
  marginBottom: "2.5rem",
  textAlign: "center",
  lineHeight: 1.7,
  fontWeight: "500",
  maxWidth: "500px",
  margin: "0 auto 2.5rem auto",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})

export const phoneLink = style({
  color: "#3b82f6",
  textDecoration: "none",
  fontWeight: "700",
  padding: "0.25rem 0.5rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#eff6ff",
    color: "#2563eb",
  },
})

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
})

export const inquiryTypeSelector = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginBottom: "2.5rem",
  padding: "1.5rem",
  backgroundColor: "rgba(59, 130, 246, 0.03)",
  borderRadius: "20px",
  border: "1px solid rgba(59, 130, 246, 0.1)",
  "@media": {
    "(max-width: 480px)": {
      flexDirection: "column",
      gap: "1rem",
      padding: "1.25rem",
    },
  },
})

export const inquiryTypeLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#1e293b",
  padding: "1rem 1.5rem",
  borderRadius: "16px",
  transition: "all 0.3s ease",
  border: "2px solid transparent",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  ":hover": {
    borderColor: "#3b82f6",
    backgroundColor: "#fafbff",
    transform: "translateY(-1px)",
  },
  ":has(input:checked)": {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
    color: "#3b82f6",
  },
  "@media": {
    "(max-width: 480px)": {
      justifyContent: "center",
    },
  },
})

export const inquiryTypeRadio = style({
  width: "1.25rem",
  height: "1.25rem",
  cursor: "pointer",
  accentColor: "#3b82f6",
})

export const submitButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "1.25rem 3rem",
  borderRadius: "16px",
  border: "none",
  fontSize: "1.125rem",
  fontWeight: "700",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
  letterSpacing: "-0.01em",
  alignSelf: "center",
  minWidth: "200px",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 35px rgba(59, 130, 246, 0.4)",
  },
  ":active": {
    transform: "translateY(0)",
  },
  ":disabled": {
    backgroundColor: "#94a3b8",
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  "@media": {
    "(max-width: 480px)": {
      width: "100%",
      minWidth: "auto",
    },
  },
})