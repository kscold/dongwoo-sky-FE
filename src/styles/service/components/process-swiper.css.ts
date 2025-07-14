import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const swiperContainer = style({
  position: "relative",
  paddingBottom: vars.space.xl,
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none", // 데스크탑에서는 숨김
    },
  },
})

export const swiperWrapper = style({
  paddingBottom: vars.space.lg,
})

export const swiperSlide = style({
  height: "auto",
  display: "flex",
})

export const processStep = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  padding: vars.space.xl,
  boxShadow: vars.shadows.lg,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.md,
  height: "100%",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: vars.shadows.xl,
  },
  "@media": {
    "screen and (max-width: 480px)": {
      padding: vars.space.lg,
    },
  },
})

export const processStepNumber = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: vars.radii.full,
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: vars.space.md,
  "@media": {
    "screen and (max-width: 480px)": {
      width: "32px",
      height: "32px",
      fontSize: vars.fontSizes.md,
    },
  },
})

export const processStepIcon = style({
  width: "48px",
  height: "48px",
  color: vars.colors.primary,
  marginBottom: vars.space.sm,
  "@media": {
    "screen and (max-width: 480px)": {
      width: "40px",
      height: "40px",
    },
  },
})

export const processStepTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginTop: vars.space.sm,
  marginBottom: vars.space.sm,
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

export const processStepDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.sm,
    },
  },
})

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    "screen and (max-width: 480px)": {
      width: "36px",
      height: "36px",
      display: "none", // 작은 화면에서는 숨김
    },
  },
})

export const prevButton = style({
  left: "-22px",
})

export const nextButton = style({
  right: "-22px",
})

export const navIcon = style({
  width: "20px",
  height: "20px",
  color: vars.colors.primary,
})
