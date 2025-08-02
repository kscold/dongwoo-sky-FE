import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { fadeInUp } from "./animations.css";

// 시간 선택기
export const timeSelector = style({
  background: vars.colors.white,
  borderRadius: "24px",
  padding: vars.space.xxl,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  marginBottom: vars.space.xl,
  animation: `${fadeInUp} 0.6s ease-out`,
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.xl,
      borderRadius: "20px",
      marginBottom: vars.space.lg,
      minHeight: "auto",
      height: "auto",
    },
  },
});

export const timeDisplay = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
  padding: `${vars.space.lg} 0`,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.lg,
      padding: `${vars.space.md} 0`,
    },
  },
});

export const timeLabel = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  marginBottom: vars.space.sm,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
});

export const timeValue = style({
  display: "block",
  fontSize: vars.fontSizes.xxl,
  fontWeight: "800",
  color: vars.colors.primary,
  marginBottom: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
});

export const timeSlider = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: `${vars.space.xl} 0`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.lg} 0`,
    },
  },
});

export const slider = style({
  width: "100%",
  height: "20px",
  borderRadius: "10px",
  background: `linear-gradient(to right, ${vars.colors.primary} 0%, ${vars.colors.primary} var(--value), ${vars.colors.gray[200]} var(--value), ${vars.colors.gray[200]} 100%)`,
  outline: "none",
  marginBottom: vars.space.lg,
  cursor: "pointer",
  transition: "all 0.3s ease",
  selectors: {
    "&::-webkit-slider-thumb": {
      appearance: "none",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: vars.colors.white,
      border: `5px solid ${vars.colors.primary}`,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(14, 77, 164, 0.5)",
      transition: "all 0.2s ease",
    },
    "&::-moz-range-thumb": {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: vars.colors.white,
      border: `5px solid ${vars.colors.primary}`,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(14, 77, 164, 0.5)",
      transition: "all 0.2s ease",
    },
    "&:hover::-webkit-slider-thumb": {
      transform: "scale(1.2)",
      boxShadow: "0 15px 40px rgba(14, 77, 164, 0.6)",
    },
    "&:hover::-moz-range-thumb": {
      transform: "scale(1.2)",
      boxShadow: "0 15px 40px rgba(14, 77, 164, 0.6)",
    },
  },
  "@media": {
    "(max-width: 768px)": {
      height: "16px",
      selectors: {
        "&::-webkit-slider-thumb": {
          width: "36px",
          height: "36px",
          border: `4px solid ${vars.colors.primary}`,
        },
        "&::-moz-range-thumb": {
          width: "36px",
          height: "36px",
          border: `4px solid ${vars.colors.primary}`,
        },
      },
    },
  },
});

export const sliderLabels = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  padding: `0 ${vars.space.sm}`,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
    },
  },
});
