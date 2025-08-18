import { style } from "@vanilla-extract/css"

export const paginationContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  marginTop: "3rem",
  "@media": {
    "(max-width: 768px)": {
      gap: "0.5rem",
    },
  },
})

export const paginationButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#f3f4f6",
    borderColor: "#d1d5db",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "0.4rem 0.8rem",
      fontSize: "0.75rem",
    },
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
})

export const pageNumber = style({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#f3f4f6",
    borderColor: "#d1d5db",
  },
  "@media": {
    "(max-width: 768px)": {
      width: "2rem",
      height: "2rem",
      fontSize: "0.75rem",
    },
  },
})

export const pageNumberActive = style({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#3b82f6",
  border: "1px solid #3b82f6",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#ffffff",
  cursor: "default",
  "@media": {
    "(max-width: 768px)": {
      width: "2rem",
      height: "2rem",
      fontSize: "0.75rem",
    },
  },
})

export const ellipsis = style({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.875rem",
  color: "#9ca3af",
  cursor: "default",
  "@media": {
    "(max-width: 768px)": {
      width: "2rem",
      height: "2rem",
      fontSize: "0.75rem",
    },
  },
})