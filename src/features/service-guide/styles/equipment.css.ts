import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

// 장비 소개 섹션 (Swiper 컴테이너용)
export const equipmentSwiperSection = style({
  marginBottom: vars.space.xxxl,
});

// 작업 가능 범위 섹션
export const capabilitiesList = style({
  listStyle: "none",
  padding: 0,
  display: "grid",
  gap: vars.space.md,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: vars.space.lg,
    },
  },
});

export const capabilityItem = style({
  backgroundColor: vars.colors.white,
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textStrong,
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
});

export const capabilityIcon = style({
  width: vars.fontSizes.xl,
  height: vars.fontSizes.xl,
  color: vars.colors.primary,
  flexShrink: 0,
});

export const capabilityTextNoIcon = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textStrong,
});
