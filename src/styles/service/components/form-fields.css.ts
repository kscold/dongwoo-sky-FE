import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const formGroup = style({
    marginBottom: vars.space.md,
})

export const label = style({
    display: "block",
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.text,
    marginBottom: vars.space.xs,
})

export const required = style({
    color: vars.colors.danger,
    marginLeft: vars.space.xs,
})

export const input = style({
    width: "100%",
    padding: `${vars.space.sm} ${vars.space.md}`,
    border: `1px solid ${vars.colors.gray[300]}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes.md,
    transition: "border-color 0.2s, box-shadow 0.2s",
    ":focus": {
        outline: "none",
        borderColor: vars.colors.primary,
        boxShadow: `0 0 0 3px rgba(59, 130, 246, 0.1)`,
    },
})

export const inputError = style({
    borderColor: vars.colors.danger,
    ":focus": {
        borderColor: vars.colors.danger,
        boxShadow: `0 0 0 3px rgba(239, 68, 68, 0.1)`,
    },
})

export const textarea = style([
    input,
    {
        minHeight: "120px",
        resize: "vertical",
    },
])

export const errorText = style({
    color: vars.colors.danger,
    fontSize: vars.fontSizes.sm,
    marginTop: vars.space.xs,
})

export const checkboxLabel = style({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: vars.fontSizes.md,
})

export const checkbox = style({
    marginRight: vars.space.sm,
    width: "16px",
    height: "16px",
})

export const checkboxText = style({
    color: vars.colors.text,
}) 