import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.lg,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: vars.space.md,
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.sm,
    },
  },
});

export const card = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.2s",
  ":hover": {
    transform: "translateY(-2px)",
  },
});

export const imageContainer = style({
  position: "relative",
  height: "200px",
  overflow: "hidden",
});

export const image = style({
  objectFit: "cover",
});

export const imagePlaceholder = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.gray[100],
  fontSize: vars.fontSizes.xxxl,
});

export const content = style({
  padding: vars.space.lg,
});

export const cardTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
});

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.md,
});

export const stars = style({
  color: "#fbbf24",
});

export const ratingText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});

export const meta = style({
  marginBottom: vars.space.md,
});

export const metaItem = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginBottom: vars.space.xs,
});

export const description = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.md,
});

export const stats = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});

export const stat = style({
  display: "flex",
  alignItems: "center",
});

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});