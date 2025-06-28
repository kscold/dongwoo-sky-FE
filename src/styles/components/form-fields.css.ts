import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

// 폼 그룹
export const formGroup = style({
  marginBottom: vars.space.lg,
})

// 라벨
export const label = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.textStrong,
  marginBottom: vars.space.xs,
})

export const required = style({
  color: vars.colors.danger,
  marginLeft: vars.space.xs,
})

// 인풋
export const input = style({
  width: "100%",
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  backgroundColor: vars.colors.white,
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primary}20`,
  },

  "::placeholder": {
    color: vars.colors.textLight,
  },
})

export const inputError = style({
  borderColor: vars.colors.danger,

  ":focus": {
    borderColor: vars.colors.danger,
    boxShadow: `0 0 0 3px ${vars.colors.danger}20`,
  },
})

// 텍스트에어리어
export const textarea = style([
  input,
  {
    minHeight: "80px",
    resize: "vertical",
  },
])

// 에러 텍스트
export const errorText = style({
  display: "block",
  fontSize: vars.fontSizes.xs,
  color: vars.colors.danger,
  marginTop: vars.space.xs,
})

// 체크박스
export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
})

export const checkbox = style({
  marginRight: vars.space.sm,
  cursor: "pointer",
})

export const checkboxText = style({
  cursor: "pointer",
})
