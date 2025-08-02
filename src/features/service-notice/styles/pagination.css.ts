import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.md,
  marginTop: vars.space.xl,
});

export const pageButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  ":disabled": {
    opacity: 0.5,
  },
});

export const pageNumbers = style({
  display: "flex",
  gap: vars.space.xs,
});

export const pageNumber = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
});

export const active = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderColor: vars.colors.primary,
});