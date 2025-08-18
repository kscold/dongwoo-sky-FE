import { style } from "@vanilla-extract/css"

export const mainPageWrapper = style({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  "@media": {
    "(max-width: 768px)": {
      padding: 0,
    },
  },
})