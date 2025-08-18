import { style } from "@vanilla-extract/css"

export const equipmentSwiperSection = style({
  marginBottom: "3rem",
})

export const sectionTitle = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "2rem",
  textAlign: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})