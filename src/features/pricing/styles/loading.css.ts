import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { spin } from "./animations.css";

export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  gap: vars.space.xl,
});

export const spinner = style({
  width: "48px",
  height: "48px",
  border: "4px solid rgba(226, 232, 240, 0.3)",
  borderTop: "4px solid vars.colors.primary",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
