import { style, styleVariants } from "@vanilla-extract/css"

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const variants = styleVariants({
  default: {},
  admin: {
    gap: "0.75rem",
  },
  inline: {
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  },
})