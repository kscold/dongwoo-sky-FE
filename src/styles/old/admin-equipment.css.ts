import { style, globalStyle, createVar, globalKeyframes } from "@vanilla-extract/css"

export const adminEquipmentPage = style({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-lg)",
})

export const pageHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const title = style({
  fontSize: "var(--font-sizes-xl)",
  fontWeight: "bold",
})

export const sortableContext = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "var(--space-md)",
})

export const cardList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "var(--space-md)",
})

export const card = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid var(--colors-gray-200)",
  borderRadius: "var(--radii-md)",
  backgroundColor: "var(--colors-white)",
  transition: "box-shadow 0.2s ease-in-out",
  overflow: "hidden",
  ":hover": {
    boxShadow: "var(--shadows-md)",
  },
})

export const cardImageWrapper = style({
  position: "relative",
  width: "100%",
  paddingTop: "60%", // 5:3 aspect ratio
  backgroundColor: "var(--colors-gray-100)",
  overflow: "hidden",
})

export const cardImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const cardBody = style({
  padding: "var(--space-md)",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-sm)",
})

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "var(--space-sm)",
})

export const cardTitle = style({
  fontSize: "var(--font-sizes-lg)",
  fontWeight: "bold",
})

export const cardDescription = style({
  fontSize: "var(--font-sizes-sm)",
  color: "var(--colors-gray-600)",
  flexGrow: 1,
  lineHeight: 1.5,
})

export const cardFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 var(--space-md) var(--space-md)`,
})

export const statusBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-xs)",
  padding: `var(--space-xs) var(--space-sm)`,
  borderRadius: "var(--radii-full)",
  fontSize: "var(--font-sizes-xs)",
  fontWeight: "500",
})

export const published = style({
  backgroundColor: "var(--colors-safe-100)",
  color: "var(--colors-safe-800)",
})

export const notPublished = style({
  backgroundColor: "var(--colors-gray-100)",
  color: "var(--colors-gray-800)",
})

export const iconButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: "var(--space-xs)",
  borderRadius: "var(--radii-sm)",
  color: "var(--colors-gray-500)",
  ":hover": {
    backgroundColor: "var(--colors-gray-100)",
    color: "var(--colors-gray-800)",
  },
})

export const buttonGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "var(--space-sm)",
})

export const dragHandle = style([
  iconButton,
  {
    cursor: "grab",
  },
])

export const modalStyles = {
  modal: style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "var(--z-indices-modal)",
  }),
  modalContent: style({
    backgroundColor: "var(--colors-white)",
    padding: "var(--space-xl)",
    borderRadius: "var(--radii-xl)",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "var(--shadows-lg)",
  }),
  form: style({
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-lg)",
  }),
  formGroup: style({
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-sm)",
  }),
  checkboxGroup: style({
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-md)",
    padding: "var(--space-md)",
    borderRadius: "var(--radii-lg)",
    backgroundColor: "var(--colors-gray-50)",
    border: "1px solid var(--colors-gray-200)",
  }),
  label: style({
    display: "block",
    marginBottom: "var(--space-xs)",
    fontWeight: "var(--font-weights-medium)",
    color: "var(--colors-gray-700)",
  }),
  input: style({
    width: "100%",
    padding: "var(--space-md)",
    borderRadius: "var(--radii-md)",
    border: "1px solid var(--colors-gray-300)",
    backgroundColor: "var(--colors-white)",
    fontSize: "var(--font-sizes-md)",
    color: "var(--colors-gray-800)",
    transition: "border-color 0.2s, box-shadow 0.2s",
    ":focus": {
      outline: "none",
      borderColor: "var(--colors-primary)",
      boxShadow: "0 0 0 3px var(--colors-primary-transparent)",
    },
  }),
  textarea: style({
    width: "100%",
    padding: "var(--space-md)",
    borderRadius: "var(--radii-md)",
    border: "1px solid var(--colors-gray-300)",
    backgroundColor: "var(--colors-white)",
    fontSize: "var(--font-sizes-md)",
    color: "var(--colors-gray-800)",
    minHeight: "120px",
    resize: "vertical",
    transition: "border-color 0.2s, box-shadow 0.2s",
    ":focus": {
      outline: "none",
      borderColor: "var(--colors-primary)",
      boxShadow: "0 0 0 3px var(--colors-primary-transparent)",
    },
  }),
  checkboxLabel: style({
    display: "flex",
    alignItems: "center",
    gap: "var(--space-sm)",
    cursor: "pointer",
    fontSize: "var(--font-sizes-md)",
    color: "var(--colors-gray-700)",
  }),
  checkbox: style({
    width: "16px",
    height: "16px",
    accentColor: "var(--colors-primary)",
  }),
  errorMessage: style({
    color: "var(--colors-danger)",
    fontSize: "var(--font-sizes-sm)",
    marginTop: "var(--space-xs)",
  }),
  modalActions: style({
    display: "flex",
    justifyContent: "flex-end",
    gap: "var(--space-md)",
    marginTop: "var(--space-md)",
  }),
}

const pulse = globalKeyframes("pulse", {
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
})

export const skeletonCard = style({
  display: "flex",
  flexDirection: "column",
  height: "360px",
  backgroundColor: "var(--colors-gray-100)",
  borderRadius: "var(--radii-md)",
  animation: `${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})
