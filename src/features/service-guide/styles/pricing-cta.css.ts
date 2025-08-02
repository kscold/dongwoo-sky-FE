import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

// 이용 요금 안내 버튼
export const pricingButtonContainer = style({
  textAlign: "center",
  marginTop: vars.space.xxxxl, // 위 섹션과의 간격
  paddingBottom: vars.space.xxxxl, // 페이지 하단 여백
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.xxxl,
      paddingBottom: vars.space.xxxl,
    },
  },
});

export const pricingButton = style({
  display: "inline-block",
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xxxl,
  paddingRight: vars.space.xxxl,
  fontSize: vars.fontSizes.xl,
  fontWeight: "600",
  borderRadius: "16px",
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  textDecoration: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  border: "none",
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 4px ${vars.colors.primaryTransparent}`,
    },
  },
  "@media": {
    "(min-width: 640px)": {
      padding: `${vars.space.xl} ${vars.space.xxxxl}`,
    },
  },
});
