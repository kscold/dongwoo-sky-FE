import { style } from "@vanilla-extract/css"

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  padding: "2rem 0",
})

export const navButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  border: "1px solid #d1d5db",
  borderRadius: "0.5rem",
  color: "#374151",
  fontSize: "0.875rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
  ":disabled": {
    backgroundColor: "#f9fafb",
    color: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: "0.25rem",
})

export const pageButton = style({
  padding: "0.5rem 0.75rem",
  backgroundColor: "white",
  border: "1px solid #d1d5db",
  borderRadius: "0.5rem",
  color: "#374151",
  fontSize: "0.875rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
})

export const activePageButton = style([
  pageButton,
  {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
    color: "white",
    ":hover": {
      backgroundColor: "#2563eb",
    },
  },
])

export const dotsButton = style([
  pageButton,
  {
    cursor: "default",
    ":hover": {
      backgroundColor: "white",
    },
  },
])