import { style, keyframes } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "calc(100vh - 200px)", // 헤더와 푸터 높이를 제외한 전체 높이
  backgroundColor: vars.colors.background,
})

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const spinner = style({
  border: `4px solid ${vars.colors.borderLight}`,
  borderTop: `4px solid ${vars.colors.primary}`,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  animation: `${spin} 1s linear infinite`,
})
